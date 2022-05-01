import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SchuelerComponent} from "./schueler.component";
import {SchuelerRoutingModule} from "./schueler-routing.module";
import {LayoutComponent} from "../_schuelerHomeScreen/layout.component";

@NgModule({
  imports: [
    CommonModule,
    SchuelerRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SchuelerComponent
  ]
})
export class SchuelerModule { }
