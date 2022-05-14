import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateTrainingComponent} from "./createTraining.component";

import {CreateTrainingRoutingModule} from "./createTraining-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    imports: [
        CommonModule,
        CreateTrainingRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule
    ],
  declarations: [
    CreateTrainingComponent
  ]
})
export class CreateTrainingModule { }
