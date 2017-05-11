import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CountriesService {
  baseUrl: string = 'https://restcountries.eu/rest/v2';

  private countriesList;
  public bookmarkedCountries: Set<Object>;

  constructor(public http: Http) {
    console.log('Hello CountriesService Provider');
    this.bookmarkedCountries = new Set();
  }

  getCountries() {
    if (this.countriesList) {
      return Observable.of(this.countriesList);
    } else {
      return this.http.get(this.baseUrl + '/all?fields=name;capital;alpha3Code')
        .map(resp => resp.json())
        .do((data) => { this.countriesList = data; console.log("deu certo") })
    }
  }

  getCountryInfo(alpha3Code) {
    return this.http.get(this.baseUrl + '/alpha/' + alpha3Code)
      .map(resp => resp.json())
  }

  bookmarkCountry(country): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.bookmarkedCountries.has(country)) {
        this.bookmarkedCountries.delete(country);
        console.log(country.name, 'removed from bookmark list');
        resolve('removed');
      } else {
        this.bookmarkedCountries.add(country);
        console.log(country.name, 'added into the bookmark list');
        resolve('added');
      }
    });

  }

}
