import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from "./components/repositories/repositories.component";
import {SearchByReactiveFormComponent} from "./components/search-by-reactive-form/search-by-reactive-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {SearchByTemplateDrivenComponent} from "./components/search-by-template-driven/search-by-template-driven.component";

@NgModule({
  declarations: [
    RepositoriesComponent,
    SearchByReactiveFormComponent,
    FilterByNamePipe,
    SearchByTemplateDrivenComponent,
  ],

  exports: [
    RepositoriesComponent,
    SearchByReactiveFormComponent,
    SearchByTemplateDrivenComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    FilterByNamePipe,
  ]
})

export class RepositoriesModule {
}
