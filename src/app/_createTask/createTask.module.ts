import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {CreateTaskRoutingModule} from "../_createTask/createTask-routing.module";
import {CreateTaskComponent} from "../_createTask/createTask.component";
import {LayoutComponent} from "../_createTask/layout.component";
import {ReactiveFormsModule} from "@angular/forms";


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
