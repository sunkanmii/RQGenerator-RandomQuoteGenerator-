import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <events-thumbnail (eventClick) ="userAttending($event)" [event]="event1"></events-thumbnail>   
    </div>
    `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '06/01/2020'
    };

    userAttending(data){
        console.log(data);
    }
}
