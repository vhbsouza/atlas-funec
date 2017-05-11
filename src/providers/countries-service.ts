import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the CountriesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CountriesService {
  baseUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(public http: Http) {
    console.log('Hello CountriesService Provider');
  }

  getCountries() {
    return this.http.get(this.baseUrl + '/all?fields=name;alpha3Code')
      .map(resp => resp.json())
  }
  getCountryInfo(code: string) {
    return this.http.get(this.baseUrl + '/alpha/' + code)
      .map(resp => resp.json())
  }
}
