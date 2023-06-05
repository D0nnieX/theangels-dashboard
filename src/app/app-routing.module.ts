import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatoriComponent } from './operatori/operatori.component';
import { ServiziComponent } from './servizi/servizi.component';
import { MezziComponent } from './mezzi/mezzi.component';

const routes: Routes = [
  { path: 'operatori', component: OperatoriComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'mezzi', component: MezziComponent },
  // altre rotte del tuo progetto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
