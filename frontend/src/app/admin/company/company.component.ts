import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/company/company.service";
import {Company} from "../../index/index-student";
import {FormsModule} from '@angular/forms';
import {stripTypename} from "@apollo/client/utilities";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companyService: CompanyService;
  public company: any = {
    name: ' ',
    slogan: ' ',
    description: ' ',
    id: 0,
    postes: []
  };
  public currentPoste: any = {
    id: 0,
    poste: "",
    companyId: 0,
    username: ""
  };
  public postes: any[] = []

  constructor(public cs: CompanyService, private activateRoute: ActivatedRoute, private router:Router) {
    this.companyService = cs;
    this.companyService.companyStatus$.subscribe(
      (data:any) => {
        if(this.company.id ==0){
            this.router.navigate(["/admin/company/details/"+data.id]);
        }
        this.company = data;
      }
    );
    this.companyService.postesStatus$.subscribe(
      (data: any) => {
        this.postes = data;
      }
    )
  }

  saveCompany() {
    this.companyService.save(stripTypename(this.company));
  }

  addAdmin() {
    this.currentPoste.poste = "ADMIN"
    this.currentPoste.companyId = this.company.id;
    this.companyService.addPoste(this.currentPoste);
  }

  addResponsable() {
    this.currentPoste.poste = "RESPONSABLE"
    this.currentPoste.companyId = this.company.id;
    this.companyService.addPoste(this.currentPoste);
  }

  ngOnInit(): void {
    const idCompany: number = Number(this.activateRoute.snapshot.paramMap.get("id"));
    if (idCompany > 0) {
      this.companyService.getById(idCompany);
      this.companyService.getPoste(idCompany);
    }
  }
}
