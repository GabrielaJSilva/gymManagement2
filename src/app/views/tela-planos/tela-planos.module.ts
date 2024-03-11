import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TelaPlanosComponent } from './tela-planos.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PlanoCardModule } from '../plano-card/plano-card.module';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TelaPlanosComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    DialogModule,
    InputTextModule,
    PlanoCardModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class TelaPlanosModule { }
