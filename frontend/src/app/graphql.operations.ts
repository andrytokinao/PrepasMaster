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
  query getPosteCompany($id: Int!) {
    getPosteCompany(idCompany: $id) {
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
const ADD_POSTE = gql`
  mutation addPoste($poste:PosteImput) {
    addPoste(poste: $poste) {
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
export {GET_STUDENTS,GET_COMPANIES,GET_POSTE_BY_COMPANY,ADD_POSTE}
