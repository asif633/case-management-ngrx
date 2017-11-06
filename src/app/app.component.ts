import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a routerLink="admin">Admin</a>
  <a routerLink="">Home</a>
              <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
}
