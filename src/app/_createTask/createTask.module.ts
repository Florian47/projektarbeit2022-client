import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {CreateTaskRoutingModule} from "./createTask-routing.module";
import {CreateTaskComponent} from "./createTask.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    imports: [
        CommonModule,
        CreateTaskRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        FormsModule
    ],
  declarations: [
    CreateTaskComponent
  ]
})
export class CreateTaskModule { }
