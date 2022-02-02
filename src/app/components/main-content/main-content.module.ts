import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HelpComponent} from "./help/help.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SearchComponent} from "../../github/components/search/search.component";
import {GithubModule} from "../../github/github.module";

@NgModule({
  declarations: [
    HelpComponent,
    RegistrationComponent
  ],
  exports: [
    HelpComponent,
    RegistrationComponent
  ],
  imports: [ CommonModule, GithubModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class MainContentModule {

}
