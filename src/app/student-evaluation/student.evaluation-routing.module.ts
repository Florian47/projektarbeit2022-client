import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentEvaluationTrainingComponent} from "./student.evaluation-training.component";
import {StudentEvaluationTrainingListComponent} from "./student.evaluation-training-list.component";
import {LayoutComponent} from "../_components/layout.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: StudentEvaluationTrainingListComponent },
      { path: 'training/:id', component: StudentEvaluationTrainingComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentEvaluationRoutingModule { }
