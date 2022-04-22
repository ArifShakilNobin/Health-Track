import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Login } from '../../models/login';
import { AuthenticationStorageService } from '../../services/authentication-storage.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login!:Login;

  hide = true;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private router: Router,
    private authService: AuthenticationService,
    private authStorageService: AuthenticationStorageService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username:[null],
      Password:[null]
    })
  }


  submitLoginForm():void{
    this.login = this.loginForm.value;
    this.authStorageService.login(this.login).subscribe({
      next: (response) => {
        this.notification.showSuccess("User login successful", "Success")
        const token = (<any>response).token;
        const refreshToken = (<any>response).refreshToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        // this.invalidLogin = false;
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        this.notification.showError("Invalid username or password.", "Error")
        console.error(err)
        // this.invalidLogin = true;
      },
      complete: () => console.info('Login complete')
    });
  }


  // public login = (form: NgForm) => {
  //   const credentials = JSON.stringify(form.value);

  //   this.http.post(environment.baseUrl + "authenticate/login",
  //     credentials
  //   ).subscribe({
  //     next: (response) => {
  //       this.notification.showSuccess("User login successful", "Success")
  //       const token = (<any>response).token;
  //       const refreshToken = (<any>response).refreshToken;
  //       localStorage.setItem("accessToken", token);
  //       localStorage.setItem("refreshToken", refreshToken);
  //       this.invalidLogin = false;
  //       this.router.navigate(["/"]);
  //     },
  //     error: (err) => {
  //       this.notification.showError("Invalid username or password.", "Error")
  //       console.error(err)
  //       this.invalidLogin = true;
  //     },
  //     complete: () => console.info('Login complete')
  //   });
  // }
}
