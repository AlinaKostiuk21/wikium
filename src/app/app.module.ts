import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/app-header.component";
import {HeaderModule} from "./components/header/app-header.module";
import {MainContentComponent} from "./components/main-content/app-main-content.component";
import {MainContentModule} from "./components/main-content/app-main-content.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent
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
