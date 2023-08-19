import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListesStudentsComponent } from './listes.students/listes.students.component';
import {
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    ListesStudentsComponent
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
    NgbAccordionItem
  ]
})
export class StudentsModule { }
