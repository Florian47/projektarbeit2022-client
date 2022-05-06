import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DozentComponent} from "./dozent.component";
import {LayoutComponent} from "../_components/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DozentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DozentRoutingModule { }
