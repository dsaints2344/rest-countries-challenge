import { Component, OnInit } from '@angular/core';
import { Country } from '../../../models/countries.model';
import { CountriesService } from '../../../services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit {
  countrycc2Code: string | null = null;
  country: Country | null = null;
  countryBordersNames: string[] = [];
  countryNativeNameKey: string = '';
  countryCurrencyKey: string = '';

  constructor(private countriesService: CountriesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countrycc2Code = params.get('countryCode')!;
    });

    this.countriesService.getCountryByCC2Code(this.countrycc2Code!)
      .subscribe((c) => {
        this.country = c[0];
        this.countryNativeNameKey = Object.keys(this.country?.name.nativeName)[0];
        this.countryCurrencyKey = Object.keys(this.country?.currencies)[0];
        this.countriesService.getCountryNamesByCC2Codes(this.country?.borders!).subscribe((c) => this.countryBordersNames = c);
      });
  
  }

  get languageKeys(): string[] {
    return this.country?.languages ? Object.keys(this.country?.languages) : []; 
  }

}
