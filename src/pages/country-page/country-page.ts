import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-country-page',
  templateUrl: 'country-page.html',
})
export class CountryPage {

  country;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.country = this.navParams.get('country');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

}
