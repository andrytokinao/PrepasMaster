import * as Apollo from "apollo-angular";
import gql from "graphql-tag";
import {Injectable} from "@angular/core";
export type Maybe<T> = T | null;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: number;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
  StringList: Array<string>;
};

export type UserApp = {
  __typename?: "UserApp";
  readonly id: Maybe<Scalars["Long"]>;
  username:Maybe<Scalars["String"]>;
  readonly firstname:Maybe<Scalars["String"]>;
  readonly lastname:Maybe<Scalars["String"]>;
  readonly contact:Maybe<Scalars["String"]>;
  readonly email:Maybe<Scalars["String"]>;
  readonly adress:Maybe<Scalars["String"]>;
  readonly anneeBac:Maybe<Scalars["String"]>;
  readonly cin:Maybe<Scalars["String"]>;
}
export type UserInput = {
  readonly id: Maybe<Scalars["Long"]>;
  readonly username:Maybe<Scalars["String"]>;
  readonly firstname:Maybe<Scalars["String"]>;
  readonly lastname:Maybe<Scalars["String"]>;
  readonly contact:Maybe<Scalars["String"]>;
  readonly email:Maybe<Scalars["String"]>;
  readonly adress:Maybe<Scalars["String"]>;
  readonly anneeBac :Maybe<Scalars["String"]>;
  readonly cin:Maybe<Scalars["String"]>;
};
export const SaveStudentsDocument = gql`
  mutation saveStudent($user: UserImput!) {
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
`;
export type Mutation = {
  __typename?: "Mutation";
  readonly deleteUser: Maybe<Scalars["Boolean"]>;
  readonly saveUser: Maybe<UserApp>;
};

export type SaveStudentMutation = {
  userApp: UserInput;
};

export type SaveStudentMutationVariables = { readonly __typename?: "Mutation" } & {
  readonly saveStudent: Maybe<
    {
      readonly __typename?: "UserApp"
    } & Pick<UserApp, "id" | "username" | "firstname" | "lastname" | "contact" | "email" | "adress" | "anneeBac" | "cin">
  >;
};
/*@Injectable({
  providedIn: "root"
})
/!*export class SaveStudent extends Apollo.Mutation<
  SaveStudentMutation,
  SaveStudentMutationVariables
> {
  document = SaveStudentsDocument;
}*!/*/
