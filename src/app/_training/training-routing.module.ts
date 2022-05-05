import { Routes, RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";



import {CreateTaskComponent} from "../_createTask/createTask.component";
import {TrainingComponent} from "./training.component";
import {CreateTrainingComponent} from "../_createTraining/createTraining.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TrainingComponent },
      { path: 'add', component: CreateTrainingComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
