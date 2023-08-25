// login-modal.component.ts
import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {UserApp} from "../../../index/index-student";
import {UserConnection} from "../../../index/user-app";
import {AuthenticationService} from "../../../service/login/auth.service";
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit{
  showRegistrationForm: boolean = false;
  isSubmitted  =  false;
  errorMessage: string ="";
  userConnection: UserConnection = {
    password: "pass",
    username: "tsisy",
    errorMessage :"Invalid"
,
  };
  invalidLogin = false;
  loginSuccess = false;
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private router: Router, public fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {

  }
  ngOnInit() {

  }
  submitLoginForm(form: any): void {
    this.isSubmitted = true;

    this.authService.login(this.userConnection.username,this.userConnection.password).subscribe(
      response => {
        this.dialogRef.close();
      },
      error => {
        this.errorMessage = 'error.'+JSON.stringify(error);
      }
    );
  }

  submitRegistrationForm(form: any): void {
    if (form.valid) {
      this.dialogRef.close();
    }
  }
  handleLogin() {
    this.authenticationService.authenticationService(this.userConnection.username, this.userConnection.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.userConnection.errorMessage = 'Login Successful.';
      alert('Login successful');
      this.dialogRef.close();
    }, (e) => {
      this.errorMessage = 'error.'+JSON.stringify(e);
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
