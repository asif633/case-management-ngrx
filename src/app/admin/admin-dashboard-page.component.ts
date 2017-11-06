import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-admin-dashboard-page',
  template: `
  <p-tabMenu [model]="items" [activeItem]="items[0]"></p-tabMenu>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminDashboardPageComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {label: 'Manage Person', icon: 'fa-bar-chart', routerLink: 'manage-person'},
        {label: 'Calendar', icon: 'fa-calendar'},
        {label: 'Documentation', icon: 'fa-book'},
        {label: 'Support', icon: 'fa-support'},
        {label: 'Social', icon: 'fa-twitter'}
    ];
}

}
