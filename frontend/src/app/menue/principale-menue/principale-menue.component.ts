
import { Component, OnInit, Input } from "@angular/core";
import {Menu} from "../type/Menu";
import {Config} from "../type";

@Component({
  selector: 'app-principale-menue',
  templateUrl: './principale-menue.component.html',
  styleUrls: ['./principale-menue.component.css']
})
export class PrincipaleMenueComponent implements OnInit {

  @Input() options : Config = { multi: false };
  @Input() menus: Menu[] = [
    {
      name: 'Etudiants',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { name: 'Liste', url: 'etudiants/liste' },
        { name: 'Verification', url: 'etudiants/verification' },
      ]
    },
    {
      name: 'Comptable ',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Transaction', url: 'comptable/transactions' },
        { name: 'Etat', url: 'comptable/etat' },
      ]
    },
    {
      name: 'Admin',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Membre', url: 'admin/users' },
        { name: 'Organisation  ', url: 'admin/company' },
        { name: 'Configuration', url: 'admin/config' },
        { name: 'Formation', url: 'admin/formation' }
      ]
    },
    {
      name: 'Profile',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Login/ Inscrire', url: 'compte/singin' },
        { name: 'Profile', url: 'compte/profile' },

      ]
    }
  ];
  config: Config = {} ;

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
    // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 submenu를 클로즈한다.
    if (!this.config.multi) {
      this.menus
        .filter((menu, i) => i !== index && menu.active)
        .forEach(menu => (menu.active = !menu.active));
    }

    // Menu의 active를 반전
    this.menus[index].active = !this.menus[index].active;
  }
}
