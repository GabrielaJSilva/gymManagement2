import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TelaFinanceiroComponent } from './tela-financeiro.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TelaFinanceiroComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CommonModule,  
    MenuModule,
    CalendarModule,
    InputTextModule,
    FormsModule
  ]

})

export class TelaFinanceiroModule { }
