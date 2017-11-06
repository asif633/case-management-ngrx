import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PrimeNgClientModule } from './shared/primeng-client.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    PrimeNgClientModule
  ],
  declarations: [HomeComponent]
})
export class ClientModule { }
