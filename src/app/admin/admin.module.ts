import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgAdminModule } from './shared/primeng-admin.module';
import { PersonsTableComponent } from './persons-table/persons-table.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonManagePageComponent } from './person-manage-page/person-manage-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { personReducer } from './shared/person-store/person.reducer';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgAdminModule,
    FormsModule,
    StoreModule.forFeature('personState', personReducer)
  ],
  declarations: [PersonsTableComponent, PersonFormComponent, PersonManagePageComponent, AdminDashboardPageComponent]
})
export class AdminModule { }
