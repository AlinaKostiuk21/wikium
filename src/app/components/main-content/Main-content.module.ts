import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HelpComponent} from "../help/Help.component";
import {RegistrationComponent} from "../registration/Registration.component";

@NgModule({
  declarations: [
    HelpComponent,
    RegistrationComponent
  ],
  exports: [
    HelpComponent,
    RegistrationComponent
  ],
  imports: [ CommonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MainContentModule {

}
