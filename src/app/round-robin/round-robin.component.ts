import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-round-robin',
  templateUrl: './round-robin.component.html',
  styleUrls: ['./round-robin.component.css']
})
export class RoundRobinComponent implements OnInit {

  @Input() proccess: Array<Proccess>;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.proccess) {

    }
  }

}
