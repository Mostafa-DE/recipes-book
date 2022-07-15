import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isThereAnError = false;
  errorMessage = "";

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
        this.errorMessage = errorMessage;
      },
      () => {
        form.reset();
      });
  }
}
