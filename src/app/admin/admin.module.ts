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
import { caseReducer } from './shared/case-store/case.reducer';
import { CaseContainerComponent } from './case-container/case-container.component';
import { CaseTableComponent } from './case-table/case-table.component';
import { CaseFormComponent } from './case-form/case-form.component';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffectsService } from './shared/person-store/person.effects';
import { PersonService } from './shared/person-store/person.service';
import { CaseService } from './shared/case-store/case.service';
import { CaseEffectsService } from './shared/case-store/case.effect';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgAdminModule,
    FormsModule,
    StoreModule.forFeature('personState', personReducer),
    StoreModule.forFeature('case', caseReducer),
    EffectsModule.forFeature([PersonEffectsService, CaseEffectsService]),
  ],
  declarations: [PersonsTableComponent, PersonFormComponent, PersonManagePageComponent, AdminDashboardPageComponent, CaseContainerComponent, CaseTableComponent, CaseFormComponent],
  providers: [PersonService, CaseService]
})
export class AdminModule { }
