import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shortest-job-first',
  templateUrl: './shortest-job-first.component.html',
  styleUrls: ['./shortest-job-first.component.css']
})
export class ShortestJobFirstComponent implements OnInit {

  @Input() proccess: Array<Proccess>;

  constructor() { }

  ngOnInit() {
  }

}
