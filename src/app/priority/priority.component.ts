import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ProccessNameSpace } from '../model/proccess';
import { SchedulerNameSpace } from '../model/scheduler';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() proccesses: Array<ProccessNameSpace.Proccess>;
  data: { tf: number, tme: number, schedule: Array<ProccessNameSpace.Proccess> };

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccesses) {
      const scheduler = new SchedulerNameSpace.Scheduler(this.proccesses);
      // this.data = scheduler.prio();
    }
  }

}
