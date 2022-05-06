import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from "../_components/layout.component";
import {DoTrainingComponent} from "./doTraining.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DoTrainingComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoTrainingRoutingModule { }
