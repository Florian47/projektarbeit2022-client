import { Routes, RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";



import {TaskComponent} from "./task.component";
import {CreateTaskComponent} from "../_createTask/createTask.component";

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
