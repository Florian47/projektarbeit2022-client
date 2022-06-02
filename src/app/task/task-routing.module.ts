import { Routes, RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";

import {TaskComponent} from "./task.component";
import {CreateTaskComponent} from "./createTask.component";
import {LayoutComponent} from "../_components/layout.component";

/**
 * Hier werden die verschieden pfade die über die Komponente aufgerufen werden können definiert hier nur der fall
 * Add  dient dazu eine Aufgabe hinzuzufuegen
 * edit/id dienzt dazu eine spezielle Aufgabe zu ändern
 * create dient dazu eine Aufgabe hinzuzufuegen
 * @author Chris Leon Brinkhoff
 */
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TaskComponent },
      { path: 'add', component: CreateTaskComponent },
      { path: 'edit/:id', component: CreateTaskComponent},
      { path: 'create', component: CreateTaskComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
