import {gql} from "apollo-angular";
const GET_STUDENTS = gql`
  query{
    getStudents{
      id, username, firstname, lastname,contact,email,adress,cin
    }
  }
`;
export {GET_STUDENTS}
