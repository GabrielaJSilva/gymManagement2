import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProfCardComponent } from './prof-card.component';

@NgModule({
  declarations: [ProfCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule
  ],
  exports: [ProfCardComponent]
})
export class ProfCardModule { }
