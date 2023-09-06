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
  public authorities:string[] ;

  constructor(aut:AuthenticationService) {
    this.autenService = aut;
    this.user=this.autenService.connected;
    this.authorities = this.autenService.authorities;
    this.autenService.getConnectedObservable().subscribe(
      (data)=>{
        this.user = data;
      }
    );
    this.autenService.getAutoritiesObservable().subscribe(
      (data)=>{
        this.authorities = data;
      }
    );
  }
  title = 'Prepa Master';
  // signle open mode
  options: Config = { multi: false };
  logout(){
    this.autenService.logout();
  }
}
