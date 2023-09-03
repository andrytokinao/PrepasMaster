
import { Component, OnInit, Input } from "@angular/core";
import {Menu} from "../type/Menu";
import {Config} from "../type";
import {AuthenticationService} from "../../service/login/auth.service";

@Component({
  selector: 'app-principale-menue',
  templateUrl: './principale-menue.component.html',
  styleUrls: ['./principale-menue.component.css']
})
export class PrincipaleMenueComponent implements OnInit {

  @Input() options : Config = { multi: false };
  authService :AuthenticationService;
  constructor(au:AuthenticationService) {
    this.authService=au;
    this.menus= this.initMenue();
    this.authService.getAutoritiesObservable().subscribe(
      (data)=>{
        this.menus= this.initMenue();
      }
    )
  }
  menus: Menu[] = []
  config: Config = {} ;
   initMenue():Menu[]{
     return [
       {
         name: 'Etudiants',
         iconClass: 'fa fa-code',
         active: true,
         accessible : this.authService.hasAutorities(['CAN_VIEW_LIST_USER','CAN_CONTROLE_USER']),
         submenu: [
           { name: 'Liste', url: 'etudiants/liste',accessible :this.authService.hasAutorities(["CAN_VIEW_LIST_USER"]) },
           { name: 'Verification', url: 'etudiants/verification',accessible :this.authService.hasAutorities(["CAN_CONTROLE_USER"]) },
         ]
       },
       {
         name: 'Comptable ',
         iconClass: 'fa fa-mobile',
         active: false,
         accessible : this.authService.hasAutorities(["CAN_VIEW_TRANSACTION","CAN_VIEW_ETAT_FINANCIAIRE"]),
         submenu: [
           { name: 'Transaction', url: 'comptable/transactions', accessible : this.authService.hasAutorities(["CAN_VIEW_TRANSACTION"]), },
           { name: 'Etat', url: 'comptable/etat', accessible : this.authService.hasAutorities(["CAN_VIEW_ETAT_FINANCIAIRE"]), },
         ]
       },
       {
         name: 'Admin',
         iconClass: 'fa fa-globe',
         active: false,
         accessible : this.authService.hasAutorities(["CAN_AFFECT_ROLE_RESPONSABLE","CAN_AFFECT_ROLE_ADMIN","CAN_VIEW_LIST_COMPANY","CAN_EDIT_COMPANY","CAN_ADD_NEW_PARCOURS"]),
         submenu: [
           { name: 'Membre', url: 'admin/users', accessible : this.authService.hasAutorities(["CAN_AFFECT_ROLE_RESPONSABLE","CAN_AFFECT_ROLE_ADMIN"]), },
           { name: 'Organisation  ', url: 'admin/company', accessible : this.authService.hasAutorities(["CAN_VIEW_LIST_COMPANY"]), },
           { name: 'Configuration', url: 'admin/config', accessible : this.authService.hasAutorities(["CAN_EDIT_COMPANY"]), },
           { name: 'Formation', url: 'admin/formation', accessible : this.authService.hasAutorities(["CAN_ADD_NEW_PARCOURS"]), }
         ]
       },
       {
         name: 'Profile',
         iconClass: 'fa fa-globe',
         active: false,
         accessible : true,
         submenu: [
           { name: 'Login/ Inscrire', url: 'compte/singin' , accessible : !this.authService.hasAutorities(["LOGED"]),},
           { name: 'Profile', url: 'compte/profile', accessible : this.authService.hasAutorities(["LODED"]), },
         ]
       }
     ];
   }
  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    // 기본 옵션
    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach(menu => (menu.active = !menu.active));
    }

    // Menu의 active를 반전
    this.menus[index].active = !this.menus[index].active;
  }
}
