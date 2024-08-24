import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/countries.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAllCountries() : Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/all`);
  }

  getCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${name}`);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${region}`);
  }
}
