import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {ReactiveFormsModule} from "@angular/forms";
import {TaskTableRoutingModule} from "./taskTable-routing.module";
import {TaskTableComponent} from "../_task-table/task-table.component";
import {LayoutComponent} from "../_task-table/layout.component";






@NgModule({
  imports: [
    CommonModule,
    TaskTableRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    TaskTableComponent
  ]
})
export class TaskTableModule { }
