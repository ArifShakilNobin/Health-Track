import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { Registration } from '../../models/registration';
import { AuthenticationStorageService } from '../../services/authentication-storage.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public invalidRegister = false;
  registrationForm!: FormGroup;
  register!: Registration;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private router: Router,
    private authService: AuthenticationService,
    private authStorageService: AuthenticationStorageService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: [null],
      email: [null],
      password: [null],
    });
  }

  submitRegistrationForm(): void {
    this.register = this.registrationForm.value;
    this.authStorageService.registration(this.register).subscribe({
      next: () => {
        this.invalidRegister = false;
        this.notification.showSuccess(
          'New user registered successfully',
          'Success'
        );
        this.router.navigate(['../login']);
      },
      error: (err) => {
        this.notification.showError(
          'User already exists / register user failed',
          'Error'
        );
        console.error(err);
        this.invalidRegister = true;
      },
      complete: () => console.info('Register complete'),
    });
  }
}
