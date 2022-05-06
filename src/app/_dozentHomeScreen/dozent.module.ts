import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DozentComponent} from "./dozent.component";

import {DozentRoutingModule} from "./dozent-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DozentRoutingModule
  ],
  declarations: [
    DozentComponent
  ]
})
export class DozentModule { }
