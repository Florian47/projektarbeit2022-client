import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateTrainingComponent} from "./createTraining.component";

import {CreateTrainingRoutingModule} from "./createTraining-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    imports: [
        CommonModule,
        CreateTrainingRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        FontAwesomeModule
    ],
  declarations: [
    CreateTrainingComponent
  ]
})
export class CreateTrainingModule { }
