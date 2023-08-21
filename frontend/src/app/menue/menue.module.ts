import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenueComponent } from './left.menue/left.menue.component';
import { TopMenueComponent } from './top.menue/top.menue.component';
import { RightMenueComponent } from './right-menue/right-menue.component';
import { PrincipaleMenueComponent } from './principale-menue/principale-menue.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    LeftMenueComponent,
    TopMenueComponent,
    RightMenueComponent,
    PrincipaleMenueComponent,
  ],
  exports: [
    TopMenueComponent,
    RightMenueComponent,
    PrincipaleMenueComponent,
  ],
  imports: [
    CommonModule,
    RouterLink, // Ajoutez le module WjPopupModule ici
  ]
})
export class MenueModule {

}
