import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {CreateTaskRoutingModule} from "../_createTask/createTask-routing.module";
import {CreateTaskComponent} from "../_createTask/createTask.component";

import {ReactiveFormsModule} from "@angular/forms";
import {LayoutComponent} from "./layout.component";


@NgModule({
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    CreateTaskComponent
  ]
})
export class CreateTaskModule { }
