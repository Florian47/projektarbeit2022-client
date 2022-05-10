import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {DoTrainingRoutingModule} from "./doTraining-routing.module";


import {ReactiveFormsModule} from "@angular/forms";
import {DoTrainingComponent} from "./doTraining.component";
import {CdkAccordionModule} from "@angular/cdk/accordion";


@NgModule({
  imports: [
    CommonModule,
    DoTrainingRoutingModule,
    ReactiveFormsModule,
    CdkAccordionModule
  ],
  declarations: [
    DoTrainingComponent
  ]
})
export class DoTrainingModule { }