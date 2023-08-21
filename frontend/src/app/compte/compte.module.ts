import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {LoginModalComponent} from "./login/login-modal/login-modal.component";



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class CompteModule { }
