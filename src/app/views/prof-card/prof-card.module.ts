import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProfCardComponent } from './prof-card.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [ProfCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,CardModule,ButtonModule,FormsModule,DialogModule
  ],
  exports: [ProfCardComponent]
})
export class ProfCardModule { }
