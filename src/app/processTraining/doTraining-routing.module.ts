import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from "../_components/layout.component";
import {DoTrainingComponent} from "./doTraining.component";
/**
 * Hier werden die verschieden pfade die über die Komponente aufgerufen werden können definiert hier nur der fall
 * do Training mit der ID des Trainings welches Durchgeführt wird
 * @author Chris Leon Brinkhoff
 */

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: ':id', component: DoTrainingComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoTrainingRoutingModule { }
