import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {ReactiveFormsModule} from "@angular/forms";
import {TrainingRoutingModule} from "./training-routing.module";
import {TrainingComponent} from "./training.component";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";






@NgModule({
    imports: [
        CommonModule,
        TrainingRoutingModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        FontAwesomeModule
    ],
  declarations: [
    TrainingComponent
  ]
})
export class TrainingModule { }
