import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../service/company/company.service";
import {Company, Scalars} from "../../../index/index-student";
import {Router} from "@angular/router";
import {Maybe} from "graphql/jsutils/Maybe";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  companies: Company[] = []
  public company: any = {
    name: ' ',
    slogan: ' ',
    description: ' ',
    id: 0,
    postes: []
  };
  public postes: any[] = []
  public formations: any[] = []
  companyService: CompanyService;

  constructor(public cs: CompanyService,private route:Router) {
    this.companyService = cs;
  }

  ngOnInit(): void {
   this.companyService.findAll().subscribe(
      ({data, error}: any) => {
        this.companies = data.getCompanies;
      }
    );
   this.companyService.companyStatus$.subscribe((data)=>{
     this.company= data;
   });
    this.companyService.postesStatus$.subscribe((data:any)=>{
      this.postes= data;
    });
  }

  edit(c: Company) {
    this.route.navigate(["/admin/company/details/"+c.id]);
  }

  select(idCompany: Maybe<Scalars["Int"]>){
    this.companyService.getById(Number(idCompany));
    this.companyService.getPoste(Number(idCompany));
  }
}
