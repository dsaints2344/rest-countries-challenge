import { Component, Input } from '@angular/core';
import { Country } from '../../../models/countries.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  @Input()   public countries: Country[] = [];
  @Input() public isDarkMode: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute){}

  navigateToDetails(index: number){
    const countryCC2 = this.countries[index].cca2;
    this.router.navigate(['details', countryCC2], { relativeTo: this.route });
  }

}
