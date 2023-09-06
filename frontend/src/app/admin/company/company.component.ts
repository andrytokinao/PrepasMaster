import { Component } from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../index/index-student";
import { FormsModule } from '@angular/forms';
import {stripTypename} from "@apollo/client/utilities";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  public companyService :CompanyService;
  public company:any = {
    name:' ',
    slogan:' ',
    description :' ',
    id:0
  };
  constructor(public cs:CompanyService) {
    this.companyService = cs;
  }
  saveCompany(){
    alert(JSON.stringify(this.company));
    this.companyService.save( stripTypename(this.company)).subscribe(
      (r:any)=>{
        this.company=r.data.saveCompany;
        alert(JSON.stringify( this.company.id));
      }
    )
  }

}
