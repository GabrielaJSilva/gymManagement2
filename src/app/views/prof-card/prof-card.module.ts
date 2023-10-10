import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProfCardComponent } from './prof-card.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProfCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule,ButtonModule
  ],
  exports: [ProfCardComponent]
})
export class ProfCardModule { }
