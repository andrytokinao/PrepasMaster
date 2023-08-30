export type Maybe<T> = T | null;
export type Scalars = {
  ID: string;
  UserInput: UserInput
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: number;
  UNREPRESENTABLE: any;
  StringList: Array<string>;
};

 export interface UserInput  {
  id: Maybe<Scalars["String"]>;
  username:Maybe<Scalars["String"]>;
  firstname:Maybe<Scalars["String"]>;
  lastname:Maybe<Scalars["String"]>;
  contact:Maybe<Scalars["String"]>;
  email:Maybe<Scalars["String"]>;
  adress:Maybe<Scalars["String"]>;
  anneeBac :Maybe<Scalars["String"]>;
  cin:Maybe<Scalars["String"]>;
  password :Maybe<Scalars["String"]>;
  codeParenage:Maybe<Scalars["String"]>;
  pass :Maybe<Scalars["String"]>;
}
export  interface UserApp  {
   id: Maybe<Scalars["String"]>;
   username:Maybe<Scalars["String"]>;
   firstname:Maybe<Scalars["String"]>;
   lastname:Maybe<Scalars["String"]>;
   contact:Maybe<Scalars["String"]>;
   email:Maybe<Scalars["String"]>;
   adress:Maybe<Scalars["String"]>;
   anneeBac :Maybe<Scalars["String"]>;
   cin:Maybe<Scalars["String"]>;
   password :Maybe<Scalars["String"]>;
   codeParenage:Maybe<Scalars["String"]>;
   pass :Maybe<Scalars["String"]>;
};

