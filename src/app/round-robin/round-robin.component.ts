import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SchedulerNameSpace } from '../model/scheduler';

@Component({
  selector: 'app-round-robin',
  templateUrl: './round-robin.component.html',
  styleUrls: ['./round-robin.component.css']
})
export class RoundRobinComponent implements OnInit {

  @Input() proccesses: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccesses) {
      const scheduler = new SchedulerNameSpace.Scheduler(this.proccesses);
      scheduler.rr();
    }
  }

}
