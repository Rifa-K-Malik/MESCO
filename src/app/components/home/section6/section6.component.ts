import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {
  images : any = [
    "assets/img/awards/award1.jpg",
    "assets/img/awards/award2.png",
    "assets/img/awards/award3.jpg",
    "assets/img/awards/award4.jpg",
  ]
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // margin:5,
    // center: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      786: {
        items: 3,
      },
    },
    nav: false,
  };
}
