import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home<h1>
             <app-people-list></app-people-list>`,
  styles: []
})
export class HomeComponent {
  constructor() {}
}
