import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { AdicionaLivroComponent } from './adiciona-livro/adiciona-livro.component';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';

const DBConfig = {
  apiKey: "AIzaSyCi_9nQkqoiqkuZGZ9_NcBG05ICtQ-_cqg",
  authDomain: "biblioteca-online-41ac5.firebaseapp.com",
  databaseURL: "https://biblioteca-online-41ac5.firebaseio.com",
  projectId: "biblioteca-online-41ac5",
  storageBucket: "biblioteca-online-41ac5.appspot.com",
  messagingSenderId: "214049069680",
  appId: "1:214049069680:web:3e329d4232f711ae"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaLivrosComponent,
    AdicionaLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    AngularFireModule.initializeApp(DBConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
