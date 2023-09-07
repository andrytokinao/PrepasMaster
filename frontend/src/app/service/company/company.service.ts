import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {ADD_POSTE, GET_COMPANIES, GET_POSTE_BY_COMPANY, GET_STUDENTS} from "../../graphql.operations";
import {Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private students: any;
  private error: any;

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
    });
  }
  findAll(): Observable<ApolloQueryResult<unknown>> {
    return this.apollo.watchQuery({
      query:GET_COMPANIES
    }).valueChanges;
  }
  getPoste(idCompany:any){
    return this.apollo
      .query({
        query: GET_POSTE_BY_COMPANY,
        variables: { id: idCompany }
      })
  }
  addPoste(poste:any){
    return this.apollo
      .mutate({
        mutation: ADD_POSTE,
        variables: { poste: poste }
      })
  }
}
