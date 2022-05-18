import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SchuelerComponent} from "./schueler.component";
import {SchuelerRoutingModule} from "./schueler-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        SchuelerRoutingModule,
        FormsModule
    ],
  declarations: [
    SchuelerComponent
  ]
})
export class SchuelerModule { }
