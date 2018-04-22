import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SchedulerNameSpace } from '../model/scheduler';

@Component({
  selector: 'app-shortest-job-first',
  templateUrl: './shortest-job-first.component.html',
  styleUrls: ['./shortest-job-first.component.css']
})
export class ShortestJobFirstComponent implements OnInit {

  @Input() proccesses: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccesses) {
      const scheduler = new SchedulerNameSpace.Scheduler(this.proccesses);
      scheduler.sjf();
    }
  }

}
