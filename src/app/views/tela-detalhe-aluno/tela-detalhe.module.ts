import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { DialogModule } from 'primeng/dialog';
import { TelaDetalheAlunoComponent } from './tela-detalhe-aluno.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [TelaDetalheAlunoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule, MenuModule,
    TieredMenuModule, FormsModule, CardModule,
    DividerModule, ButtonModule,DialogModule,
    ToastModule
  ]
})
export class TelaDetalheModule { }
