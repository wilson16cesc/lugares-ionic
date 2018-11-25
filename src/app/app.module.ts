import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { TerceraPage } from '../pages/tercera/tercera';
import { LoginPage } from '../pages/login/login';


import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule } from 'angularfire2';

import { LugaresServices } from '../services/lugares.service';
import { AuthService } from '../services/auth.service';


export const firebaseConfig = {
  apiKey: "AIzaSyAX-sOrkobWZAygpCi-pxgUMioYlO2LORg",
  authDomain: "ionicbasic-85ece.firebaseapp.com",
  databaseURL: "https://ionicbasic-85ece.firebaseio.com",
  projectId: "ionicbasic-85ece",
  storageBucket: "ionicbasic-85ece.appspot.com",
  messagingSenderId: "893121442654"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresServices,
    AuthService
  ]
})
export class AppModule {}
