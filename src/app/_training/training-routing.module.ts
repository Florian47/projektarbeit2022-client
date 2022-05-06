import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {TrainingComponent} from "./training.component";
import {CreateTrainingComponent} from "../_createTraining/createTraining.component";
import {LayoutComponent} from "../_components/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TrainingComponent },
      { path: 'add', component: CreateTrainingComponent },
      { path: 'edit/:id', component: CreateTrainingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
