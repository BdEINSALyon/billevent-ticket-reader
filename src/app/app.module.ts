import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TicketValidatorService} from './ticket-validator.service';
import { ParametresComponent } from './parametres/parametres.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ParametresComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TicketValidatorService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
