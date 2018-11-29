import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  home = HomePage;
  contrasenaN = '';
  usuarioN = '';
  personaN= [];
  usuarios = [];

  

  clickNuevo(){
    if (this.contrasenaN.length > 8 || this.usuarioN.length > 0){
      
      this.usuarios.push({usuario: this.usuarioN, contrasena: this.contrasenaN})
      console.log(this.usuarioN);
      console.log(this.contrasenaN);
      this.navCtrl.pop();

      

    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: "La contraseña debe de ser de 8 caracteres y debe de haber un correo como usuario",
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
