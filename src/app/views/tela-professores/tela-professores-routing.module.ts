import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaProfessoresComponent } from './tela-professores.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component:TelaProfessoresComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TelaProfessoresRoutingModule { }
