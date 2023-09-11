import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {ADD_USER, GET_USER_BY_INSCRIPTION} from "../../graphql.operations";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private apollo: Apollo) {
  }
 students:any[]=[];
  studentsObservable:Subject<any> = new Subject<any>();
  get studentsStatus$(): Observable<boolean> {
    return this.studentsObservable.asObservable();
  }
  saveStudent(userInput: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SaveStudent($user: UserImput!) {
          saveUser(userApp: $user) {
            id
            username
            firstname
            lastname
            contact
            email
            adress
            cin
          }
        }
      `,
      variables: {
        user: userInput
      }
    });
  }
  addUser(user:any){
    return this.apollo.mutate({
      mutation:ADD_USER,
      variables: {user: user}
    });
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
}
