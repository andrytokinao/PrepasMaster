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
export {GET_STUDENTS,GET_COMPANIES}
