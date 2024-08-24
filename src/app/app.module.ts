import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ButtonModule } from 'primeng/button'
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { CountriesListComponent } from './components/countries/countries-list/countries-list.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './components/countries/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    LayoutComponent,
    CountriesListComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule ,
    DropdownModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
