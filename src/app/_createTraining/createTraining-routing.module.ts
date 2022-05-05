import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {CreateTrainingComponent} from "./createTraining.component";




const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'create', component: CreateTrainingComponent },

      { path: 'edit/:id', component: CreateTrainingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTrainingRoutingModule { }
