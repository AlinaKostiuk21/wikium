import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetRequestComponent} from "../components/get-request/app-get-request.component";
import {RepositoriesComponent} from "../components/repositories/repositories.component";


@NgModule({
  declarations: [
    RepositoriesComponent
  ],

  exports: [
    RepositoriesComponent
  ],

  imports: [
    CommonModule
  ]
})

export class RepositoriesModule { }
