import { Component } from '@angular/core';

@Component ({
  selector: 'app-events-root',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `

})

export class EventsAppComponent {
  title = 'Random-Quote-Generator';
}
