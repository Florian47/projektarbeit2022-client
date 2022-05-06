import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {CreateTaskRoutingModule} from "./createTask-routing.module";
import {CreateTaskComponent} from "./createTask.component";

import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateTaskComponent
  ]
})
export class CreateTaskModule { }
