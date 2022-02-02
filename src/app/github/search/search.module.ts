import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchByReactiveFormComponent} from "./components/search-by-reactive-form/search-by-reactive-form.component";
import {SearchByTemplateDrivenComponent} from "./components/search-by-template-driven/search-by-template-driven.component";

const exportsComponents = [
  SearchByReactiveFormComponent,
  SearchByTemplateDrivenComponent
];

@NgModule({
  declarations: [...exportsComponents],

  exports: [...exportsComponents],

  imports: [
    CommonModule
  ]
})

export class SearchModule {
}
