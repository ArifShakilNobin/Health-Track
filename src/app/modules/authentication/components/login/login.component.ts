import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.authStorageService.login(this.login).subscribe();
  }
}
