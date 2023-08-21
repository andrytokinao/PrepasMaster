import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-etid-student-modal',
  templateUrl: './etid-student-modal.component.html',
  styleUrls: ['./etid-student-modal.component.css']
})
export class EtidStudentModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EtidStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Logique pour l'enregistrement
  }
}
