import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-first-in-first-out',
  templateUrl: './first-in-first-out.component.html',
  styleUrls: ['./first-in-first-out.component.css']
})
export class FirstInFirstOutComponent implements OnInit {

  @Input() proccess: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccess) {

    }
  }

}
