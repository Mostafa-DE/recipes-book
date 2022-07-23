import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {User} from "./user.model";
import {environment} from "../../environments/environment";

interface UserModel {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: Date
}

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private autoLogoutTimer: any = null;


  constructor(private http: HttpClient, private router: Router) {
  }

  register(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebaseKey}`,
      {email: email, password: password, returnSecureToken: true}
    ).pipe(
      catchError(AuthService.handleError),
      tap(resData => {
        this.handleAuthentication(resData);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebaseKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(AuthService.handleError),
      tap(resData => {
        this.handleAuthentication(resData);
      })
    );
  }

  autoLogin() {
    const userData: UserModel = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;
    const {email, id, _token, _tokenExpirationDate} = userData;
    const user = new User(email, id, _token, new Date(_tokenExpirationDate));
    if (user.token) {
      this.user.next(user);
      const expirationDuration = new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  async logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    await this.router.navigate(['/auth']);
    if (this.autoLogoutTimer) clearTimeout(this.autoLogoutTimer);
    this.autoLogoutTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(resData) {
    const {email, localId, idToken, expiresIn} = resData;
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(+expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private static handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) return throwError(errorMessage);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "This email already exists please try with another one.";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "This email does not exist please register first.";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "Incorrect password, please try again.";
    }

    return throwError(errorMessage);
  }

}
