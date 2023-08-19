import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenueComponent } from './left.menue/left.menue.component';
import { RightMenueComponent } from './right.menue/right.menue.component';
import { TopMenueComponent } from './top.menue/top.menue.component';



@NgModule({
  declarations: [
    LeftMenueComponent,
    RightMenueComponent,
    TopMenueComponent
  ],
  exports: [
    TopMenueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenueModule { }
