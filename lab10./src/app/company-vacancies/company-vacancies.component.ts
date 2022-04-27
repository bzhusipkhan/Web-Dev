import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {

  vacancies: Vacancy[] = [];
  constructor(private route: ActivatedRoute,private companyService: CompanyService, ) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const companyId = Number(routeParams.get('companyId'));
    this.getVacancies(companyId);
  }

  getVacancies(id:number){
    this.companyService.getVacancies(id).subscribe((data)=>{
          this.vacancies = data;
    });
}

}
