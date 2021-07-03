import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  mesco: any = []

  constructor() { }

  ngOnInit(): void {
    this.awd()
  }
awd() {
  this.mesco = [
    {
      title: 'Adtuhmbiolk',
      img: 'assets/img/certificates/certi1.jpg'
    },
    {
      title: 'Adtuhmbiolk',
      img: 'assets/img/certificates/certi2.jpg'
    },
    {
      title: 'Adtuhmbiolk',
      img: 'assets/img/certificates/certi3.jpg'
    },
    {
      title: 'Adtuhmbiolk',
      img: 'assets/img/certificates/certi4.jpg'
    },

  ]
}
}
