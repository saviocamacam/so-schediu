import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { HeaderComponent } from './header/header.component';
import { ShortestJobFirstComponent } from './shortest-job-first/shortest-job-first.component';
import { FirstInFirstOutComponent } from './first-in-first-out/first-in-first-out.component';
import { PriorityComponent } from './priority/priority.component';
import { RoundRobinComponent } from './round-robin/round-robin.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule.forRoot(),
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
