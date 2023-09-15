import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { TelaAlunosComponent } from './tela-alunos.component';

@NgModule({
  declarations: [TelaAlunosComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    //DashboardRoutingModule,
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    MenuModule
  ],
  exports: [TelaAlunosComponent]
})
export class TelaAlunosModule { }
