import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {DoTrainingRoutingModule} from "./doTraining-routing.module";


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DoTrainingComponent} from "./doTraining.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  imports: [
    CommonModule,
    DoTrainingRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    MatExpansionModule
  ],
  declarations: [
    DoTrainingComponent
  ]
})
export class DoTrainingModule { }
