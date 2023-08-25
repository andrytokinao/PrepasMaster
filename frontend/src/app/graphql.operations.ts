import {Apollo, gql} from "apollo-angular";
export type Maybe<T> = T | null;

const GET_STUDENTS = gql`
  query{
    getStudents{
      id, username, firstname, lastname,contact,email,adress,cin
    }
  }
`;
export {GET_STUDENTS}
