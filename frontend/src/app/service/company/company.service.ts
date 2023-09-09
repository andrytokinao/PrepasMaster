import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {ADD_POSTE, GET_COMPANIES, GET_POSTE_BY_COMPANY, GET_STUDENTS} from "../../graphql.operations";
import {Observable, Subject} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public company: any;
  private companyObservable: Subject<any> = new Subject<any>();

  get companyStatus$(): Observable<boolean> {
    return this.companyObservable.asObservable();
  }
  constructor(private apollo: Apollo) { }
  save(company: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SaveCompany($company: CompanyInput!) {
          saveCompany(company: $company) {
            id,name,description,slogan
          }
        }
      `,
      variables: {
        company: company
      }
    }).subscribe(
      (r: any) => {
        alert('after save ');
        this.company = r.data.saveCompany;
        this.setCompany(this.company);
      }
    );
  }
  findAll(): Observable<ApolloQueryResult<unknown>> {
    return this.apollo.watchQuery({
      query:GET_COMPANIES
    }).valueChanges;
  }
  getPoste(idCompany:number){
    return this.apollo
      .query({
        query: GET_POSTE_BY_COMPANY,
        variables: { idCompany: idCompany }
      })
  }
  addPoste(poste:any){
    return this.apollo
      .mutate({
        mutation: ADD_POSTE,
        variables: { poste: poste }
      })
  }
  setCompany(c: any) {
    this.company = c;
    this.companyObservable.next(this.company);
  }
}
