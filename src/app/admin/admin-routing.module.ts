import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardPageComponent } from './admin-dashboard-page.component';
import { PersonManagePageComponent } from './person-manage-page/person-manage-page.component';

const routes: Routes = [
  {path: '', component: AdminDashboardPageComponent, children: [
    {path: 'manage-person', component: PersonManagePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
