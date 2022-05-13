import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEvaluationTrainingListComponent } from './student.evaluation-training-list.component';
import {StudentEvaluationTrainingComponent} from "./student.evaluation-training.component";
import {StudentEvaluationRoutingModule} from "./student.evaluation-routing.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CdkAccordionModule} from "@angular/cdk/accordion";



@NgModule({
  declarations: [
    StudentEvaluationTrainingListComponent,
    StudentEvaluationTrainingComponent
  ],
  imports: [
    CommonModule,
    StudentEvaluationRoutingModule,
    NgxChartsModule,
    CdkAccordionModule
  ]
})
export class StudentEvaluationModule { }
