import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/countries.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  public regions: string[] =  ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion: string | undefined;
  public countrySearchInput: string = '';
  public countries: Country[] = [];
  public filteredCountries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.countriesService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
      this.filteredCountries = countries;
    });
  }

   handleSearch() {
    if (!this.selectedRegion) {
      if (this.countrySearchInput) {
        this.filterCountriesByNameRemotely(this.countrySearchInput.toLowerCase());
      } else {
        this.filteredCountries = [...this.countries];
      }
    } else {
      this.filterCountriesLocally();
    }
  }

  handleRegionChange() {
    if (this.selectedRegion) {
      this.filterCountriesByRegionRemotely(this.selectedRegion.toLowerCase());
    } else if (this.countrySearchInput) {
      this.filterCountriesByNameRemotely(this.countrySearchInput.toLowerCase());
    } else {
      this.loadAllCountries();
    }
  }

  filterCountriesLocally() {
    const lowerCaseInput = this.countrySearchInput.toLowerCase();
    const regionFilter = this.selectedRegion ? this.selectedRegion.toLowerCase() : '';

    this.filteredCountries = this.countries.filter(c => {
      const matchesRegion = regionFilter ? c.region.toLowerCase().includes(regionFilter) : true;
      const matchesName = lowerCaseInput ? c.name.common.toLowerCase().includes(lowerCaseInput) : true;
      return matchesRegion && matchesName;
    });
  }

  filterCountriesByNameRemotely(filterValue: string) {
    this.countriesService.getCountriesByName(filterValue).subscribe((countries) => {
      this.countries = countries;
      this.filterCountriesLocally();
    });
  }

  filterCountriesByRegionRemotely(region: string) {
    this.countriesService.getCountriesByRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.filterCountriesLocally();
    });
  }

}
