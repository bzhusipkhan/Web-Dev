import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken, Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`http://127.0.0.1:8000/api/login/`, {
      username,
      password
    });
  }


  getCompanies(): Observable<Company[]> {
         return this.http.get<Company[]>(`http://127.0.0.1:8000/api/companies/`)
  }

  getVacancies(id:number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies/`)
  }
}
