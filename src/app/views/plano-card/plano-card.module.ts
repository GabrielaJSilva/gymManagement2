import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PlanoCardComponent } from './plano-card.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [PlanoCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule, ButtonModule
  ],
  exports: [PlanoCardComponent]
})
export class PlanoCardModule { }
