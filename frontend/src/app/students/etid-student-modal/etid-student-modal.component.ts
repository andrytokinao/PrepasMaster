import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Apollo} from "apollo-angular";
import {StudentService} from "../../service/student/student.service";
import {UserApp} from "../../index/index-student";
import {stripTypename} from "@apollo/client/utilities";
import {CompanyService} from "../../service/company/company.service";

@Component({
  selector: 'app-etid-student-modal',
  templateUrl: './etid-student-modal.component.html',
  styleUrls: ['./etid-student-modal.component.css']
})
export class EtidStudentModalComponent {
  public newStudent: any;
  public studentService;

  constructor(
    public dialogRef: MatDialogRef<EtidStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      student: any

    },
    private apollo: Apollo,
    public studentService1: StudentService,
    private companyService:CompanyService
  ) {
    this.newStudent = data.student;
    this.studentService = studentService1;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {

     if(this.companyService == null || this.companyService.company == null || !(this.companyService.company.id>0)){
       // TODO ; Creer une affichage de message d'erreur
       alert('You cant save this ');
       return;
     }
     this.newStudent.idCompany=this.companyService.company.id;
     this.newStudent.userResponsable="0341981972" // TODO ; Remplacer par l'utilisateur connecté (coté front ou coté back )
     this.studentService.addUser(this.newStudent).subscribe(
      (res:any) => {
        this.studentService.setStudents(res.data.addUser)
        this.dialogRef.close();
      },
      (error) => {
        const errorJson = JSON.stringify(error);
        alert('Erreur lors de l\'enregistrement de l\'étudiant: ' + errorJson);

      }
    );
  }

}
