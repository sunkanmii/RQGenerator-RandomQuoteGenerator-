import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>Google Angular coding challenge</h2>
            <div>{{event.name}}</div>
            <div>{{event.date}}</div>
            <div>{{event.price}}</div>
            <button class="btn btn-primary" (click) ="handleClickMe()">
                Attend</button>
        </div>
    `
})

export class EventsThumbnailComponent {
    @Input() event: any; 

    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit("I will attend the event!");
    }
}