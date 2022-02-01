import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {NavComponent} from "../nav/app-nav.component";
import {CommonModule} from "@angular/common";
import {HeaderMainComponent} from "../header-main/app-header-main.component";

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