import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {DoTrainingRoutingModule} from "./doTraining-routing.module";


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DoTrainingComponent} from "./doTraining.component";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  imports: [
    CommonModule,
    DoTrainingRoutingModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    DoTrainingComponent
  ]
})
export class DoTrainingModule { }
