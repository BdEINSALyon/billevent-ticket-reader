import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametresComponent} from './parametres/parametres.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  { path: 'params', component: ParametresComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule {
}
