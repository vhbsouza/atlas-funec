import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesService } from "../../providers/countries-service";
import { CountryPage } from "../country-page/country-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countries: Array<any>;

  constructor(public navCtrl: NavController, private _countries: CountriesService) {

  }

  ionViewDidLoad() {
    this._countries.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  openCountry(code) {
    this._countries.getCountryInfo(code).subscribe(data => {
      this.navCtrl.push(CountryPage, {
        country: data
      });
    });
  }

}
