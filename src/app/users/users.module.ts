import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FontAwesomeModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule
    ],
  declarations: [
    ListComponent,
    AddEditComponent
  ]
})
export class UsersModule { }
