// login-modal.component.ts
import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {UserApp} from "../../../index/index-student";
import {UserConnection} from "../../../index/user-app";
import {AuthenticationService} from "../../../service/login/auth.service";
import {HttpResponse} from "@angular/common/http";
import {first} from "rxjs";
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit{
  isSubmitted  =  false;
  errorLogin: string ="";
  errorFormContact: string ="";
  errorValidationSms: string ="";
  errorFormPassword: string ="";
  errorFormRegistration: string ="";

  showLogin: boolean = true;
  showFormContact:boolean = false ;
  showValidationSms:boolean = false ;
  showFormPassword:boolean = false ;
  showFormRegistration:boolean = false ;

  userConnection: UserConnection = {
    password: "0341981972",
    username: "123",
    errorMessage :""
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

  submitRegistrationForm(form: any): void {
    if (form.valid) {
      this.dialogRef.close();
    }
  }
  submitFormContact():void{
    this.showForm("showValidationSms");
  }
  submitValidationSms():void{
    this.showForm("showFormPassword");
  }
  submitPassword():void{
    this.showForm("showFormRegistration");
  }
  submitRegistration():void{
      this.dialogRef.close();
  }
  submitLogin() {
    this.authenticationService.authenticationService(this.userConnection.username, this.userConnection.password).pipe(first()).subscribe((response: HttpResponse<any>) => {
      alert("Response ss="+JSON.stringify(response));
      const jSessionId = response.headers.get('Set-Cookie');
      if (jSessionId) {
        const jSessionIdValue = jSessionId.split(';')[0].split('=')[1];
        console.log('JSESSIONID:', jSessionIdValue);
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.errorLogin = " Login success";

      }else{
        this.invalidLogin = true;
        this.loginSuccess = false;
        this.errorLogin = " Login failed";
      }
    });
  }

  public showForm(showFormName:string):void{
    if (showFormName === "showLogin") {
      this.showLogin = true;
      this.showFormContact = false ;
      this.showValidationSms = false ;
      this.showFormPassword = false ;
      this.showFormRegistration = false ;
    } else if (showFormName === "showFormContact") {
      this.showLogin = false;
      this.showFormContact = true ;
      this.showValidationSms = false ;
      this.showFormPassword = false ;
      this.showFormRegistration = false ;
    } else if (showFormName === "showValidationSms") {
      this.showLogin = false;
      this.showFormContact = false ;
      this.showValidationSms = true ;
      this.showFormPassword = false ;
      this.showFormRegistration = false ;
    } else if (showFormName === "showFormPassword") {
      this.showLogin = false;
      this.showFormContact = false ;
      this.showValidationSms = false ;
      this.showFormPassword = true ;
      this.showFormRegistration = false ;
    } else if (showFormName === "showFormRegistration") {
      this.showLogin = false;
      this.showFormContact = false ;
      this.showValidationSms = false ;
      this.showFormPassword = false ;
      this.showFormRegistration = true ;
    } else {
    }
  }
}
