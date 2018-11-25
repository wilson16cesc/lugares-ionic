import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresServices } from '../../services/lugares.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
  lugares: any = []
  constructor(public navCtrl: NavController, public lugaresServices: LugaresServices) {
    this.lugaresServices.getLugares().valueChanges()
    .subscribe( (lugaresFB) =>{
      console.log(lugaresFB);
      this.lugares = lugaresFB;
    });
  }

  navegarLugar(name){
    this.navCtrl.push(LugarPage, {nombre: name});
  }

  irAVistaDetalleC(){
    this.navCtrl.push(LugarPage, {lugar: {}});
  }
  irAVistaDetalle(lugar){
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }
  deleteLugar(lugar){
    if(confirm('seguro que desea borrar este lugar ')){
      this.lugaresServices.deleteLugar(lugar).then( () => {
        alert('lugar eliminado');
      })
    }
    
  }

}
