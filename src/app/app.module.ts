import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Always register your components as you use them.
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {  }
