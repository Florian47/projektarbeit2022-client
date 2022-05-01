import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DozentComponent} from "./dozent.component";

import {LayoutComponent} from "../_dozentHomeScreen/layout.component";
import {DozentRoutingModule} from "./dozent-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DozentRoutingModule
  ],
  declarations: [
    LayoutComponent,
    DozentComponent
  ]
})
export class DozentModule { }
