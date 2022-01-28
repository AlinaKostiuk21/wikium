import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/Header.component";
import {HeaderModule} from "./components/header/Header.module";
import {MainContentComponent} from "./components/main-content/Main-content.component";
import {MainContentModule} from "./components/main-content/Main-content.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
