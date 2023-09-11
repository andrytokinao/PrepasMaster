import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Apollo} from "apollo-angular";
import {StudentService} from "../../service/student/student.service";
import {UserApp} from "../../index/index-student";
import {stripTypename} from "@apollo/client/utilities";

@Component({
  selector: 'app-etid-student-modal',
  templateUrl: './etid-student-modal.component.html',
  styleUrls: ['./etid-student-modal.component.css']
})
export class EtidStudentModalComponent {
  public newStudent: UserApp;
  public studentService;

  constructor(
    public dialogRef: MatDialogRef<EtidStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      student: any

    },
    private apollo: Apollo,
    public studentService1: StudentService
  ) {
    this.newStudent = data.student;
    this.studentService = studentService1;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    const strippedInput = {
      id:"",
      username:"String",
      password :"String",
      firstname:"String",
      lastname:"String",
      contact:"",
      cin:"String",
      email:"String",
      adress:"String",
      codeParenage:"String",
      idCompany:1,
      userResponsable:"0341981972"}

    this.studentService.addUser(strippedInput).subscribe(
      ({data}) => {
        this.dialogRef.close();
      },
      (error) => {
        const errorJson = JSON.stringify(error);
        alert('Erreur lors de l\'enregistrement de l\'étudiant: ' + errorJson);

      }
    );
  }

}
