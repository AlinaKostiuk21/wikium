import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/Header.component";
import {NavComponent} from "./components/nav/Nav.component";
import {HeaderMainComponent} from "./components/header-main/Header-main.component";
import {MainContentComponent} from "./components/main-content/Main-content.component";
import {HelpComponent} from "./components/help/Help.component";
import {RegistrationComponent} from "./components/registration/Registration.component";

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // NavComponent,
    // HeaderMainComponent,
    // MainContentComponent,
    // HelpComponent,
    // RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
