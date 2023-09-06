import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../../service/company/company.service";
import {Company} from "../../../index/index-student";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  companies: Company[] = []
  companyService: CompanyService;

  constructor(public cs: CompanyService) {
    this.companyService = cs;
  }

  ngOnInit(): void {
   this.companyService.findAll().subscribe(
      ({data, error}: any) => {
        this.companies = data.getCompanies;
      }
    );
  }
}
