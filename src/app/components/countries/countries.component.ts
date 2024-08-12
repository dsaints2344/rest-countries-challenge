import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/countries.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  public regions: string[] = [];
  public selectedRegion: string | undefined;
  public countrySearchInput: string = '';
  public countries: Country[] = [];

  constructor(private countiesService: CountriesService){}

  ngOnInit(): void {
    this.regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];


    this.countiesService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    })
  }

}
