import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {StudentsModule} from "./students/students.module";
import {MenueModule} from "./menue/menue.module";
import {RouterModule} from "@angular/router";
import {ListesStudentsComponent} from "./students/listes.students/listes.students.component";
import {TransactionComponent} from "./comptable/transaction/transaction.component";
import {AdminModule} from "./admin/admin.module";
import {ControleModule} from "./controle/controle.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {ComptableModule} from "./comptable/comptable.module";
import {VerificationComponent} from "./students/verification/verification.component";
import {EtatComponent} from "./comptable/etat/etat.component";
import {CompanyComponent} from "./admin/company/company.component";
import {ConfigComponent} from "./admin/config/config.component";
import {UsersComponent} from "./admin/users/users.component";
import {AdminFormationComponent} from "./admin/admin.formation/admin.formation.component";
import {LoginComponent} from "./compte/login/login.component";
import {ProfileComponent} from "./compte/profile/profile.component";
import {CompteModule} from "./compte/compte.module";
import { HomeComponent } from './home/home.component';
import {ListComponent} from "./admin/company/list/list.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
     BrowserModule,
    FormsModule ,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    StudentsModule,
    MenueModule,
    RouterModule.forRoot([
      {path: "etudiants/liste", component: ListesStudentsComponent},
      {path: "etudiants/verification", component: VerificationComponent},
      {path: "comptable/transactions", component: TransactionComponent},
      {path: "comptable/etat", component: EtatComponent},
      {path: "admin/company/details/:id", component: CompanyComponent},
      {path: "admin/company/liste", component: ListComponent},
      {path: "admin/config", component: ConfigComponent},
      {path: "admin/users", component: UsersComponent},
      {path: "compte/singin", component: LoginComponent},
      {path: "compte/profile", component: ProfileComponent},
      {path: "", component: HomeComponent}

    ]),
    ControleModule,
    BrowserAnimationsModule,
    CompteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
