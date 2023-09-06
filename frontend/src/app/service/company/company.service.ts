import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {GET_COMPANIES, GET_STUDENTS} from "../../graphql.operations";
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

}
