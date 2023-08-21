import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { EtatComponent } from './etat/etat.component';



@NgModule({
  declarations: [
    TransactionComponent,
    EtatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComptableModule { }
