import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListesStudentsComponent } from './listes.students/listes.students.component';
import {
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {MenueModule} from "../menue/menue.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {ComptableModule} from "../comptable/comptable.module";
import {AdminModule} from "../admin/admin.module";
import { VerificationComponent } from './verification/verification.component';
import { EtidStudentModalComponent } from './etid-student-modal/etid-student-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListesStudentsComponent,
    VerificationComponent,
    EtidStudentModalComponent
  ],
  exports: [
    ListesStudentsComponent
  ],
    imports: [
        CommonModule,
        NgbAccordionBody,
        NgbAccordionButton,
        NgbAccordionCollapse,
        NgbAccordionDirective,
        NgbAccordionHeader,
        NgbAccordionItem,
        MenueModule,
        RouterOutlet,
        MatDialogModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,

    ]
})
export class StudentsModule { }
