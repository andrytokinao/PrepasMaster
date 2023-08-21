// login-modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  showRegistrationForm: boolean = false;

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) {}

  submitLoginForm(form: any): void {
    if (form.valid) {
      // Traitez les données du formulaire de connexion ici
      // Une fois le traitement terminé, fermez la boîte de dialogue
      this.dialogRef.close();
    }
  }

  submitRegistrationForm(form: any): void {
    if (form.valid) {
      // Traitez les données du formulaire d'inscription ici
      // Une fois le traitement terminé, fermez la boîte de dialogue
      this.dialogRef.close();
    }
  }
}
