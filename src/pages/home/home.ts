import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
registro = RegistrarPage;
usuarioN = "";
contrasenaN = "";
usuarios = [];
usuario = "";
contrasena = "";

  

  constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    this.usuarios=this.navParams.get('usuarioN');
    this.storage.keys()
      .then(keys => {
        if(keys.some(key=> key == 'usuarios')){
          this.storage.get('usuarios')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          });
        }
      });
  }
  clickIniciar(){
    console.log(this.usuario);
    console.log(this.contrasena);
    let index = this.usuarios.findIndex( u => 
                                                  this.usuarioN == u.usuario &&
                                                  this.contrasenaN == u.contrasena
                                                  );
  if (this.usuarioN == this.usuario && this.contrasenaN == this.contrasena){
      const alert = this.alertCtrl.create({
        title: 'Éxito',
        subTitle: "El inicio de sesión fue exitosa",
        buttons: ['OK']
      });
      alert.present();

      this.storage.set('usuarios', JSON.stringify(this.usuarios));
    
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Alerta',
        subTitle: "El inicio de sesión no tuvo éxito ",
        buttons: ['OK']
      });
      alert.present();
    }
  }
  clickAgregar(){
    this.navCtrl.push(this.registro, {usuarioN: this.usuarios})

  }
}
