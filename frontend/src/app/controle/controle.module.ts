import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomControleComponent } from './bottom-controle/bottom-controle.component';



@NgModule({
  declarations: [
    BottomControleComponent
  ],
  exports: [
    BottomControleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ControleModule { }
