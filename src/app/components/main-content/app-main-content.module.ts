import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HelpComponent} from "../help/app-help.component";
import {RegistrationComponent} from "../registration/app-registration.component";

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
