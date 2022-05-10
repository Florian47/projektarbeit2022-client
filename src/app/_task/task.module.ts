import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {ReactiveFormsModule} from "@angular/forms";
import {TaskRoutingModule} from "./task-routing.module";
import {TaskComponent} from "./task.component";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";






@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [
    TaskComponent
  ]
})
export class TaskModule { }