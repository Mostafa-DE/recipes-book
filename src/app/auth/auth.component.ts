import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isThereAnError = false;
  errorMessage = "";
  @ViewChild(PlaceholderDirective, {static: false}) alert: PlaceholderDirective;
  closeSubscription: Subscription

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit(): void {
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    const {email, password} = form.value;
    let authObservable: Observable<AuthResponseData>;
    if (this.isLoginMode) authObservable = this.authService.login(email, password);
    else authObservable = this.authService.register(email, password);
    authObservable.subscribe(async () => {
        await this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.isThereAnError = true;
        this.showErrorAlert(errorMessage);
        this.errorMessage = errorMessage;
      },
      () => {
        // form.reset();
      });
  }

  private showErrorAlert(message: string) {
    const viewContainerRef = this.alert.viewContainerRef;
    viewContainerRef.clear();

    const component = viewContainerRef.createComponent(AlertComponent);
    component.instance.message = message;
    this.closeSubscription = component.instance.onAlertClose.subscribe(() => {
      this.closeSubscription.unsubscribe();
      viewContainerRef.clear();
    });

  }

  handleAlertClose() {
    this.errorMessage = "";
  }
}
