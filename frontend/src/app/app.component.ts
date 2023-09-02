import { Component } from '@angular/core';
import {Config, Menu} from "./menue/type";
import {AuthenticationService} from "./service/login/auth.service";
import {UserApp} from "./index/index-student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autenService:AuthenticationService;
  user:any   ;
  public autorities:[string] ;

  constructor(aut:AuthenticationService) {
    this.autenService = aut;
    this.user=this.autenService.connected;
    this.autorities = this.autenService.autorities;
    this.autenService.getConnectedObservable().subscribe(
      (data)=>{
        this.user = data;
      }
    );
    this.autenService.getAutoritiesObservable().subscribe(
      (data)=>{
        this.autorities = data;
      }
    );
  }
  title = 'Prepa Master';
  // signle open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      name: 'Front-end',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { name: 'HTML', url: '#' },
        { name: 'CSS', url: '#' },
        { name: 'Javascript', url: '#' }
      ]
    },
    {
      name: 'Responsive web',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    {
      name: 'Web Browser',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    }
  ];
}
