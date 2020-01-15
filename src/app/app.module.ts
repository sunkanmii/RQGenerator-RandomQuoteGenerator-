import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Always register your components as you use them.
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavAppComponent } from './nav/nav-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavAppComponent,
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { 

}
