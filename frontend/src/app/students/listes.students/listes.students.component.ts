import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GET_STUDENTS} from "../../graphql.operations";
import {EtidStudentModalComponent} from "../etid-student-modal/etid-student-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {UserApp} from "../../index/index-student";
import {UserConnection} from "../../index/user-app";

@Component({
  selector: 'app-liste-students',
  templateUrl: './listes.students.component.html',
  styleUrls: ['./listes.students.component.css']
})
export class ListesStudentsComponent {
  students :any[]=[];
  error : any;
  constructor(private apollo:Apollo,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query:GET_STUDENTS
    }).valueChanges.subscribe(({data,error}:any)=>{
        this.students = data.getStudents;
        this.error = error;
      }
    );
  }

  openDialog(student:UserApp): void {
    const dialogRef = this.dialog.open(EtidStudentModalComponent, {
      width: '600px',
      height: '550px',
      minWidth: '550px',
      data: { student }
    },);

    dialogRef.afterClosed().subscribe(result => {
      // Logique après la fermeture de la boîte de dialogue
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
      // Logique après la fermeture de la boîte de dialogue
    });
  }
}
