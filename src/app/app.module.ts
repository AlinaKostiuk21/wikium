import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HeaderModule} from "./components/header/header.module";
import {MainContentComponent} from "./components/main-content/main-content.component";
import {MainContentModule} from "./components/main-content/main-content.module";
import {GithubModule} from "./github/github.module";

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
    MainContentModule,
    GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
