import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPlanosComponent } from './tela-planos.component';

const routes: Routes = [
  {path: '', component:TelaPlanosComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TelaPlanosRoutingModule { }
