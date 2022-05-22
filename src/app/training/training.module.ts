import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TrainingRoutingModule} from "./training-routing.module";
import {TrainingComponent} from "./training.component";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CreateTrainingComponent} from "./createTraining.component";






@NgModule({
    imports: [
        CommonModule,
        TrainingRoutingModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        FontAwesomeModule,
        MatFormFieldModule,
        FormsModule
    ],
  declarations: [
    TrainingComponent,
    CreateTrainingComponent
  ]
})
export class TrainingModule { }
