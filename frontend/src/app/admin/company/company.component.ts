import {Component} from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../index/index-student";
import {FormsModule} from '@angular/forms';
import {stripTypename} from "@apollo/client/utilities";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  public companyService: CompanyService;
  public company: any = {
    name: ' ',
    slogan: ' ',
    description: ' ',
    id: 0
  };
  public currentPoste: any = {
    id: 0,
    poste: "",
    companyId: 0,
    username: ""
  };
  public postes: any[] = []

  constructor(public cs: CompanyService) {
    this.companyService = cs;
    this.companyService.companyStatus$.subscribe(
      (data)=>{
        this.company=data;

      }
    )
  }

  saveCompany() {
    this.companyService.save(stripTypename(this.company));
  }

  addAdmin() {
    this.currentPoste.poste = "ADMIN"
    this.currentPoste.companyId = this.company.id;
    this.companyService.addPoste(this.currentPoste).subscribe(
      (r) => {
        this.companyService.getPoste(this.company.id).subscribe(
          (rp: any) => {
            alert(JSON.stringify(this.postes));
            this.postes = rp.data.getPosteCompany;
            alert(JSON.stringify(this.postes));

          }
        )
      }
    )
  }

  addResponsable() {
    this.currentPoste.poste = "RESPONSABLE"
    this.currentPoste.companyId = this.company.id;
    this.companyService.addPoste(this.currentPoste).subscribe(
      (r) => {
        this.companyService.getPoste(this.company.id).subscribe(
          (rp: any) => {
            this.postes = rp.data.getPosteCompany;
          }
        )
      }
    )
  }
}
