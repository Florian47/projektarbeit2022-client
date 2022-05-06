import { Routes, RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";

import {TaskComponent} from "./task.component";
import {CreateTaskComponent} from "../_createTask/createTask.component";
import {LayoutComponent} from "../_components/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TaskComponent },
      { path: 'add', component: CreateTaskComponent },
      { path: 'edit/:id', component: CreateTaskComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
