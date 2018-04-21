import { Component, OnInit, Input } from '@angular/core';

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

}
