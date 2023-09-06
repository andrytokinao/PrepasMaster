import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private apollo: Apollo) {
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
}
