import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SchuelerComponent} from "./schueler.component";
import {SchuelerRoutingModule} from "./schueler-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SchuelerRoutingModule
  ],
  declarations: [
    SchuelerComponent
  ]
})
export class SchuelerModule { }
