import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchuelerComponent} from "./schueler.component";
import {LayoutComponent} from "../_components/layout.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: SchuelerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchuelerRoutingModule { }
