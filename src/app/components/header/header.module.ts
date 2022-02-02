import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavComponent} from "./nav/nav.component";
import {HeaderMainComponent} from "./header-main/header-main.component";

@NgModule({
  declarations: [
    NavComponent,
    HeaderMainComponent
  ],
  exports: [ NavComponent, HeaderMainComponent ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HeaderModule {

}
