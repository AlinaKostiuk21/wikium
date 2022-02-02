import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RepositoriesModule} from "./repositories/repositories.module";
import {SearchComponent} from "./components/search/search.component";
import {GithubService} from "../services/github.service";
import {SearchModule} from "./search/search.module";

@NgModule({
  declarations: [
    SearchComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    RepositoriesModule,
    SearchModule
  ],

  exports: [
    SearchComponent
  ],

  providers: [
    GithubService
  ]
})

export class GithubModule { }
