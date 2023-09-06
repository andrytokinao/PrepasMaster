import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFormationComponent } from './admin.formation/admin.formation.component';
import {RouterModule} from "@angular/router";
import {StudentsModule} from "../students/students.module";
import {ComptableModule} from "../comptable/comptable.module";
import { UsersComponent } from './users/users.component';
import { ConfigComponent } from './config/config.component';
import { CompanyComponent } from './company/company.component';
import {ControleModule} from "../controle/controle.module";
import { ListComponent } from './company/list/list.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AdminFormationComponent,
    UsersComponent,
    ConfigComponent,
    CompanyComponent,
    ListComponent
  ],
    imports: [
        CommonModule,
        ControleModule,
        RouterModule.forRoot([
            {path: "company", component: CompanyComponent},
            {path: "users", component: UsersComponent},
            {path: "configuration", component: ConfigComponent}
        ]),
        FormsModule,
    ]
})
export class AdminModule { }
