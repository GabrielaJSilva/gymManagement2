import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TelaCadastroComponent } from './tela-cadastro.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [TelaCadastroComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CommonModule,
 //   FormsModule,    
    MenuModule,
    InputTextModule
  ]
})
export class TelaCadastroModule { }
