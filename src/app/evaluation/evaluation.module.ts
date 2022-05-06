import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationTrainingListComponent } from './evaluation-training-list.component';
import {EvaluationTrainingComponent} from "./evaluation-training.component";
import {EvaluationRoutingModule} from "./evaluation-routing.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    EvaluationTrainingListComponent,
    EvaluationTrainingComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    NgxChartsModule,
  ]
})
export class EvaluationModule { }
