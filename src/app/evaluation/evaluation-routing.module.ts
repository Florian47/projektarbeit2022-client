import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EvaluationTrainingComponent} from "./evaluation-training.component";
import {EvaluationTrainingListComponent} from "./evaluation-training-list.component";
import {LayoutComponent} from "../_components/layout.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: EvaluationTrainingListComponent },
      { path: 'training/:id', component: EvaluationTrainingComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
