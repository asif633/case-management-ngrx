import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-custom-preload';

const routes: Routes = [
  {path: '', loadChildren: './client/client.module#ClientModule', data: { prelaod: true}},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
