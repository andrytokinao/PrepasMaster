import {Apollo, gql} from "apollo-angular";

export type Maybe<T> = T | null;

const GET_STUDENTS = gql`
  query{
    getStudents{
      id, username, firstname, lastname,contact,email,adress,cin
    }
  }
`;
const GET_COMPANIES = gql`
  query{
    getCompanies{
      id, name, description, slogan
    }
  }
`;
const GET_POSTE_BY_COMPANY = gql`
  query getPosteCompany($idCompany: Int!) {
    getPosteCompany(idCompany: $idCompany) {
      id
      debut
      poste
      userApp {
        username
        lastname
        firstname
      }
    }
  }
`;
const ADD_POSTE_COMPANY = gql`
  mutation addPoste($poste:PosteImput) {
    addPosteCompany(poste: $poste) {
      id
      debut
      poste
      userApp {
        username
        lastname
        firstname
      }
    }
  }
`;
const SAVE_COMPANY = gql`
  mutation SaveCompany($company: CompanyInput!) {
    saveCompany(company: $company) {
      id,name,description,slogan,postes {
        poste
        userApp {
          id
          firstname
          lastname
        }
      }
    }
  }
`;
const GET_COMPANY_BY_ID = gql`
  query GetCompany($idCompany: Int) {
    getCompanyById(idCompany: $idCompany) {
      id,name,description,slogan,postes {
        poste
        userApp {
          id
          firstname
          lastname
        }
      }
    }
  }
`;
export {
  GET_STUDENTS,
  GET_COMPANIES,
  GET_POSTE_BY_COMPANY,
  ADD_POSTE_COMPANY,
  SAVE_COMPANY,
  GET_COMPANY_BY_ID
}
