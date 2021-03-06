import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {MenuItem} from 'primeng/components/common/api';
import {TabMenuModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule, DialogModule, MultiSelectModule, ListboxModule, ChipsModule} from 'primeng/primeng';

@NgModule({
  imports: [AccordionModule, DataTableModule, SharedModule, InputTextModule, ButtonModule, TabMenuModule, DialogModule, MultiSelectModule, ListboxModule, ChipsModule],
  exports: [AccordionModule, DataTableModule, SharedModule, InputTextModule, ButtonModule, TabMenuModule, DialogModule, MultiSelectModule, ListboxModule, ChipsModule]
})
export class PrimeNgAdminModule { }