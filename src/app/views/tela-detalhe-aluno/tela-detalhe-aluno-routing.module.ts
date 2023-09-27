import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaDetalheAlunoComponent } from './tela-detalhe-aluno.component';

const routes: Routes = [
  {path: '', component:TelaDetalheAlunoComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TelaDetalheAlunoRoutingModule { }
