import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../compte/login/login-modal/login-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
