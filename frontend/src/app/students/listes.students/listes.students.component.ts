import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import {GET_STUDENTS} from "../../graphql.operations";

@Component({
  selector: 'app-liste-students',
  templateUrl: './listes.students.component.html',
  styleUrls: ['./listes.students.component.css']
})
export class ListesStudentsComponent {
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
