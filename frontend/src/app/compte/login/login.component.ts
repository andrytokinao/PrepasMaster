import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px',
      data: { name: '', color: '' }, // Pass data if needed
    });

    dialogRef.afterClosed().subscribe((res) => {
      // Handle the result from the dialog if needed
    });
  }
}
