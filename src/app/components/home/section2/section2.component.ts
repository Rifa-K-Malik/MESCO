import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  images : any = [
    "assets/img/events/Event1.jpg",
    "assets/img/events/Event10.jpg",
    "assets/img/events/Event11.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
