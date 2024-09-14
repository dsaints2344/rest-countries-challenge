import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/countries.model';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/all`);
  }

  getCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${name}`);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${region}`);
  }

  getCountryByCC2Code(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`);
  }

  getCountryNamesByCC2Codes(codes: string[]): Observable<string[]> {
    const countryRequests = codes.map(c => this.getCountryByCC2Code(c));

    return forkJoin(countryRequests).pipe(
      map((responses: Country[][]) => responses.map(res => res[0]?.name?.common) || 'Unknown country')
    );
  }
}
