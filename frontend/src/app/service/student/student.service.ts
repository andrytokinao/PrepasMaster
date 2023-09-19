import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {ADD_PARCOURS, ADD_USER, GET_USER_BY_INSCRIPTION} from "../../graphql.operations";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private apollo: Apollo) {
  }
  students:any[]=[];
  student:any ;
  studentsObservable:Subject<any> = new Subject<any>();
  studentObservable:Subject<any> = new Subject<any>();
  get studentsStatus$(): Observable<boolean> {
    return this.studentsObservable.asObservable();
  }
  get studentStatus$(): Observable<boolean> {
    return this.studentObservable.asObservable();
  }

  addUser(user:any){
    return this.apollo.mutate({
      mutation:ADD_USER,
      variables: {user: user}
    }).subscribe(
      (res:any) => {
        this.setStudent(res.data.addUser);
        //  this.dialogRef.close();
      },
      (error) => {
        const errorJson = JSON.stringify(error);
        alert('Erreur lors de l\'enregistrement de l\'étudiant: ' + errorJson);

      }
    );
  }
  addParcours(parcours:any){
   return  this.apollo.mutate(
      {
        mutation:ADD_PARCOURS,
        variables:{parcours:parcours}
      }
    )
  }
  findDistinctByInscriptionCompany_Id(idCompany:number){
    this.apollo.query({
      query:GET_USER_BY_INSCRIPTION,
      variables: {idCompany: idCompany}
    }).subscribe(
      (value:any)=>{
        this.setStudents(value.data.findDistinctByInscriptionCompany_Id) ;
      }
    );
  }
  setStudents(s:any){
    this.students = s;
    this.studentsObservable.next(this.students);
  }
  setStudent(s:any){
    this.student = s;
    this.studentObservable.next(this.student);
  }
}
