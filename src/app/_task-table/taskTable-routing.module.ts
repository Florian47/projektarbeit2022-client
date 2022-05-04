import { Routes, RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";

import {TaskTableComponent} from "./task-table.component";
import {AddEditComponent} from "../users/add-edit.component";
import {CreateTaskComponent} from "../_createTask/createTask.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TaskTableComponent },
      { path: 'edit/:id', component: CreateTaskComponent },
      { path: 'create', component: CreateTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTableRoutingModule { }
