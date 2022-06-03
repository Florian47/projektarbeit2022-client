import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {TrainingComponent} from "./training.component";
import {CreateTrainingComponent} from "./createTraining.component";
import {LayoutComponent} from "../_components/layout.component";
/**
 * Hier werden die verschieden pfade die über die Komponente aufgerufen werden können definiert hier
 * Add  dient dazu eine Training erstellen
 * edit/id dienzt dazu eine spezielles Training zu ändern
 * create dient dazu eine training erstellen
 * @author Chris Leon Brinkhoff
 */
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TrainingComponent },
      { path: 'add', component: CreateTrainingComponent },
      { path: 'edit/:id', component: CreateTrainingComponent},
      { path: 'create', component: CreateTrainingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
