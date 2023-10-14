import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PlanoCardComponent } from './plano-card.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [PlanoCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule, ButtonModule, DialogModule, ToastModule
  ],
  exports: [PlanoCardComponent]
})
export class PlanoCardModule { }
