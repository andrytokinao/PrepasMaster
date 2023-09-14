import { Component } from '@angular/core';
import {Config, Menu} from "./menue/type";
import {AuthenticationService} from "./service/login/auth.service";
import {Company, UserApp} from "./index/index-student";
import {CompanyService} from "./service/company/company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autenService:AuthenticationService;
  user:any   ;
  public authorities:string[] ;
  public company:any;

  constructor(aut:AuthenticationService,public companyService:CompanyService) {
    this.autenService = aut;
    this.user=this.autenService.connected;
    this.authorities = this.autenService.authorities;
    this.autenService.getConnectedObservable().subscribe(
      (data)=>{
        this.user = data;
      }
    );
    this.companyService.companyStatus$.subscribe((data)=>{
      this.company=data;
    })
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
