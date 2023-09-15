import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import  {CommonModule} from '@angular/common'
import { MenusComponent } from './menu.component';

@NgModule({
  declarations: [MenusComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    TieredMenuModule,
    CardModule,
    ButtonModule,
    DividerModule,
           
  ],
  exports: [ MenusComponent ]
})
export class MenuModule {}