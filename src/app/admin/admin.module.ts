import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgAdminModule } from './shared/primeng-admin.module';
import { PersonsTableComponent } from './persons-table/persons-table.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonManagePageComponent } from './person-manage-page/person-manage-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgAdminModule
  ],
  declarations: [PersonsTableComponent, PersonFormComponent, PersonManagePageComponent, AdminDashboardPageComponent]
})
export class AdminModule { }
