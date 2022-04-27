import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';

const routes: Routes = [
  {path: '',component: CompaniesComponent},
  {path: ':companyId',component: CompanyVacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
