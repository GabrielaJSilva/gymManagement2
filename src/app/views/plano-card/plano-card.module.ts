import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PlanoCardComponent } from './plano-card.component';

@NgModule({
  declarations: [PlanoCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule
  ],
  exports: [PlanoCardComponent]
})
export class PlanoCardModule { }
