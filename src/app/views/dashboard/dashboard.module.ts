import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { TelaAlunosModule } from 'src/app/views/tela-alunos/tela-alunos.module';
import { TelaProfessoresModule } from '../tela-professores/tela-professores.module';
import { TelaPlanosModule } from '../tela-planos/tela-planos.module';
import { TelaFinanceiroModule } from '../tela-financeiro/tela-financeiro.module';
import { TelaCadastroModule } from '../tela-cadastro/tela-cadastro.module';
import { ProfCardModule } from '../prof-card/prof-card.module';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [ DashboardComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    DashboardRoutingModule,
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    MenuModule,
    TelaAlunosModule,
    TelaProfessoresModule,
    TelaPlanosModule,
    TelaFinanceiroModule,
    TelaCadastroModule,
    ProfCardModule,
    DialogModule,
    
  ]
})
export class DashboardModule { }
