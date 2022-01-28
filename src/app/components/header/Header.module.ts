import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {NavComponent} from "../nav/Nav.component";
import {CommonModule} from "@angular/common";
import {HeaderMainComponent} from "../header-main/Header-main.component";

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
