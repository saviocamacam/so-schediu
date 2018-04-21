import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { HeaderComponent } from './header/header.component';
import { ShortestJobFirstComponent } from './shortest-job-first/shortest-job-first.component';
import { FirstInFirstOutComponent } from './first-in-first-out/first-in-first-out.component';
import { PriorityComponent } from './priority/priority.component';
import { RoundRobinComponent } from './round-robin/round-robin.component';


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    HeaderComponent,
    ShortestJobFirstComponent,
    FirstInFirstOutComponent,
    PriorityComponent,
    RoundRobinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
