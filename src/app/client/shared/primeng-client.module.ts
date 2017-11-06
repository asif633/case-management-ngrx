import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {MenuItem} from 'primeng/components/common/api';

@NgModule({
  imports: [AccordionModule],
  exports: [AccordionModule]
})
export class PrimeNgClientModule { }
