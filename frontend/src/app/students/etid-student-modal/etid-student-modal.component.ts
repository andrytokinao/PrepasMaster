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
  public newStudent: any={};
  public studentService;
  checked:boolean = true ;
  parcoursImput: any = {};
  showFormAddParcours: boolean = false;
  formations: any[] = [];
  public parcours: any[]=[];

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
    this.studentService.studentStatus$.subscribe(
      (data)=>{
        this.newStudent = data;
        alert("students id ="+this.newStudent.id);
      }
    );
    this.formations = stripTypename(this.companyService.formations) ;
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
     this.studentService.addUser(this.newStudent);
  }
  addParcours(){
      this.parcoursImput.userId = this.newStudent.id;
      this.parcoursImput.companyId = this.companyService.company.id
      let formations = this.formations.filter(element => element.checked);
      const formationIds = formations.map(objet => objet.id);
      this.parcoursImput.responsableId="0341981972";// TODO Il faut recuperer l'user encours
      this.parcoursImput.formationIds = formationIds;
      this.studentService.addParcours(this.parcoursImput).subscribe(
        (res:any)=>{
         // TODO : a resolve le probleme ,   this.newStudent.parcours innaccessible
          // this.newStudent.parcours =res.data.addParcours;
          this.parcours = res.data.addParcours;
          this.showFormAddParcours = false;
        }
      );

  }

}
