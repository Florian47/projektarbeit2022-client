import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateTrainingComponent} from "./createTraining.component";

import {LayoutComponent} from "./layout.component";
import {CreateTrainingRoutingModule} from "../_createTraining/createTraining-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  imports: [
    CommonModule,
    CreateTrainingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    LayoutComponent,
    CreateTrainingComponent
  ]
})
export class CreateTrainingModule { }
