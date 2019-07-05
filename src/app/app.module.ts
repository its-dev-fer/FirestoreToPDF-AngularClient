import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

const firebaseConfig = {
  apiKey: "AIzaSyCyqbT2u2-IhAskN1lJe0o3MDzCBIzJ-wI",
  authDomain: "pdf-cloud-functions.firebaseapp.com",
  databaseURL: "https://pdf-cloud-functions.firebaseio.com",
  projectId: "pdf-cloud-functions",
  storageBucket: "pdf-cloud-functions.appspot.com",
  messagingSenderId: "869042452920",
  appId: "1:869042452920:web:ee0cc6a4904056eb"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
