import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TerceraPage } from '../tercera/tercera';
import { HomePage } from '../home/home';

import { LugaresServices } from '../../services/lugares.service'



/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})

export class LugarPage {
  lugar: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public lugaresSevice: LugaresServices) {
    this.lugar = navParams.get('lugar');
  }
  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
    this.lugaresSevice.createLugar(this.lugar);
    this.navCtrl.pop();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LugarPage');
  // }
  //
  // navigateBack() {
  //   this.navCtrl.pop();
  // }
  //
  // navigateToThird() {
  //   this.navCtrl.push(TerceraPage);
  // }




}
