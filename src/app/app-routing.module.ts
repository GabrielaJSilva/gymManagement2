import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { TelaDetalheAlunoComponent } from './views/tela-detalhe-aluno/tela-detalhe-aluno.component';
//import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'by-id/:id', component: TelaDetalheAlunoComponent},
  {
    path: 'dashboard',
   // canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
