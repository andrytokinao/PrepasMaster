import {Injectable} from '@angular/core';
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";
import {
  ADD_POSTE_COMPANY,
  GET_COMPANIES,
  GET_COMPANY_BY_ID,
  GET_POSTE_BY_COMPANY,
  GET_STUDENTS,
  SAVE_COMPANY
} from "../../graphql.operations";
import {Observable, Subject} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public company: any={};
  public postes : any;
  private companyObservable: Subject<any> = new Subject<any>();
  private postesObservable: Subject<any> = new Subject<any>();

  get companyStatus$(): Observable<boolean> {
    return this.companyObservable.asObservable();
  }
  get postesStatus$(): Observable<boolean> {
    return this.postesObservable.asObservable();
  }

  constructor(private apollo: Apollo) {
    this.company.id=1;
  }

  saveCompany(company: any) {
    const companyImput = company;
    alert("aa" + JSON.stringify(companyImput));
    delete companyImput.postes;
    return this.apollo.mutate({
      mutation: SAVE_COMPANY,
      variables: {
        company: company
      }
    }).subscribe(
      (r: any) => {
        this.setCompany( this.setCompany(r.data.saveCompany));
      }
    );
  }

  findAll(): Observable<ApolloQueryResult<unknown>> {
    return this.apollo.watchQuery({
      query: GET_COMPANIES
    }).valueChanges;
  }

  getPoste(idCompany: number) {
    return this.apollo
      .query({
        query: GET_POSTE_BY_COMPANY,
        variables: {idCompany: idCompany}
      }).subscribe(
        (response:any)=>{
          this.setPostes(response.data.getPosteCompany);
        }
      )
  }

  addPoste(poste: any) {
    return this.apollo
      .mutate({
        mutation: ADD_POSTE_COMPANY,
        variables: {poste: poste}
      }).subscribe(
        (response:any)=>{
          this.setPostes(response.data.addPosteCompany);
    }
      )
  }

  setCompany(c: any) {
    this.company = c;
    this.companyObservable.next(this.company);
  }
  setPostes(c: any) {
    this.postes = c;
    this.postesObservable.next(this.postes);
  }

  getById(idCompany: number) {
    this.apollo.query({
      query: GET_COMPANY_BY_ID,
      variables: {idCompany: idCompany}
    }).subscribe((rep: any) => {
        this.setCompany(rep.data.getCompanyById);
      }
    )
  }

}
