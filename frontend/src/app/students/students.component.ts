import { Component , OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import {GET_STUDENTS} from "../graphql.operations";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit{
  students :any[]=[];
  error : any;

  constructor(private apollo:Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query:GET_STUDENTS
    }).valueChanges.subscribe(({data,error}:any)=>{
      this.students = data.getStudents;
      this.error = error;
    }
    );
  }

}
