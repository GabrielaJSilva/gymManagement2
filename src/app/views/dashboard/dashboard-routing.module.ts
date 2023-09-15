import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TelaProfessoresComponent } from '../tela-professores/tela-professores.component';
import { TelaAlunosComponent } from '../tela-alunos/tela-alunos.component';
import { TelaPlanosComponent } from '../tela-planos/tela-planos.component';
import { TelaFinanceiroComponent } from '../tela-financeiro/tela-financeiro.component';
import { TelaCadastroComponent } from '../tela-cadastro/tela-cadastro.component';
const routes: Routes = [
  {path: '', component:DashboardComponent },
  {path: 'tela-alunos', component: TelaAlunosComponent },
  {path: 'tela-professores', component: TelaProfessoresComponent },
  {path: 'tela-planos', component: TelaPlanosComponent },
  {path: 'tela-financeiro', component: TelaFinanceiroComponent},
  {path: 'tela-cadastro', component: TelaCadastroComponent},
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }


 