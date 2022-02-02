import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from "./components/repositories/repositories.component";

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

export class RepositoriesModule {
}
