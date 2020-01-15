import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>Angular development</h2>
            <!-- 
                ? - Safe navigation operator.
                In order to avoid runtime hidden bugs.
            -->
            <!-- interpolation -->  
            <div>{{event?.name}}</div>
            <div>Date: {{event?.date}}</div>
            <!-- ngSwitch can be of any data type -->
            <div [ngStyle]="getStartTimeStyle()"
            [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'" >Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault >Normal Start</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <!-- 
                Using ngIf directive to hide content is good 
                if you're not planning to display the element on the page 
                again, which is good for performance because the element it is used 
                on will be commented out, meaning it will not be rendered on the DOM.
                But if you're planning on displaying it again, or display a component use 
                (that probably fetches data) the [hidden] HTML attribute.
             -->
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            <button class="btn btn-primary" (click) ="handleClickMe()">Attend</button>
        </div>
    `,

    styles: [
        `
        .green{
            color: green !important;
        }
        .bold{
            font-weight: bold;
        }
        .thumbnail{
            min-height: 210px;
        }
        .pad-left{
            margin-left: 10px;
        }
        .well div {
            color: #bbb;
        }
        `    
    ]
})

export class EventsThumbnailComponent {
    @Input() event: any; 

    attendees:any = 3000;
    handleClickMe() {
       
    }
    userAttending(data){

    }

    getStartTimeStyle():any {
        if(this.event && this.event.time === '8:00 am')
            return {color: 'green', 'font-weight': 'bold'};
        return {};
    }
}