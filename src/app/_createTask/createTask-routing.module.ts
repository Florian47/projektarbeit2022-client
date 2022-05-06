import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTaskComponent} from "./createTask.component";
import {LayoutComponent} from "../_components/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'create', component: CreateTaskComponent },

      { path: 'edit/:id', component: CreateTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTaskRoutingModule { }
