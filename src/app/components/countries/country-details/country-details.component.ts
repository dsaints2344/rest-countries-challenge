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

  constructor(private countriesService: CountriesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countrycc2Code = params.get('countryCode')!;
      console.log(this.countrycc2Code);
    })
  }

}
