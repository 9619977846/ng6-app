import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <div class="container">
    <router-outlet></router-outlet>
   </div>

  `,
  styles:['.container { padding : 16px}']
})
export class AppComponent {}
