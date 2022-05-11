import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FontAwesomeModule
    ],
  declarations: [
    ListComponent,
    AddEditComponent
  ]
})
export class UsersModule { }
