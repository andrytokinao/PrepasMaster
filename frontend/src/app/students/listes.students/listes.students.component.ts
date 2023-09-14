import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {GET_STUDENTS, GET_USER_BY_INSCRIPTION} from "../../graphql.operations";
import {EtidStudentModalComponent} from "../etid-student-modal/etid-student-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {UserApp} from "../../index/index-student";
import {UserConnection} from "../../index/user-app";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/student/student.service";
import {CompanyService} from "../../service/company/company.service";

@Component({
  selector: 'app-liste-students',
  templateUrl: './listes.students.component.html',
  styleUrls: ['./listes.students.component.css']
})
export class ListesStudentsComponent implements OnInit{
  students :any[]=[];
  error : any;
  private idCompany: number=0;

  constructor(private apollo:Apollo,public dialog: MatDialog,private route:ActivatedRoute,private studentService:StudentService,private router: Router,private companyService:CompanyService) {

  }


  ngOnInit(): void {

    this.studentService.findDistinctByInscriptionCompany_Id(this.idCompany);

    this.studentService.studentsStatus$.subscribe(
      (data:any)=>{
        this.students = data;
      }
    );

    this.route.queryParams.subscribe((params) => {

      if (!params.hasOwnProperty('company')) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { company:  this.companyService.company.id},
          queryParamsHandling: 'merge'
        });
      }else {
        this.idCompany =Number( params['company']);
        if(this.companyService.company.id != this.idCompany){
          this.companyService.getById(this.idCompany);
        }
      }
      this.studentService.findDistinctByInscriptionCompany_Id(this.idCompany);
    });
  }

  openDialog(student:UserApp): void {
    const dialogRef = this.dialog.open(EtidStudentModalComponent, {
      width: '600px',
      height: '550px',
      minWidth: '550px',
      data: { student }
    },);

    dialogRef.afterClosed().subscribe(result => {
  //    this.studentService.findDistinctByInscriptionCompany_Id(this.idCompany);
    });
  }

  openNewStudent() {
    var student = {

    }
    const dialogRef = this.dialog.open(EtidStudentModalComponent, {
      width: '600px',
      height: '550px',
      minWidth: '550px',
      data: { student }
    },);

    dialogRef.afterClosed().subscribe(result => {
    //  this.studentService.findDistinctByInscriptionCompany_Id(this.idCompany);
    });
  }
}
