import { Component, Input } from '@angular/core';
import { Country } from '../../../models/countries.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  @Input()   public countries: Country[] = [];
}
