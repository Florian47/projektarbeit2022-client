import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EvaluationTrainingComponent} from "./evaluation-training.component";


const routes: Routes = [
  {
    path: '', component: EvaluationTrainingComponent,
    children: [
      { path: 'training/:id', component: EvaluationTrainingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationTrainingListModule { }
