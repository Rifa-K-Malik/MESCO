import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latestevent',
  templateUrl: './latestevent.component.html',
  styleUrls: ['./latestevent.component.scss']
})
export class LatesteventComponent implements OnInit {
  images : any = []

  constructor() { }

  ngOnInit(): void {
    this.img()
  }

  img() {
    this.images=[
      {
        imge: 'assets/img/events/Event0.png',
        name: 'Lorem ipsum dollar'
  
      },
      {
        imge: 'assets/img/events/Event1.jpg',
        name: '52nd Annual General Meeting'
  
      },
      {
        imge: 'assets/img/events/Event2.jpg',
        name: '52nd Annual General Meeting'
  
      },
      {
        imge: 'assets/img/events/Event3.jpg',
        name: '52nd Annual General Meeting'
  
      },
      {
        imge: 'assets/img/events/Event10.jpg',
        name: 'Sewing machine distribution program'
  
      },
      {
        imge: 'assets/img/events/Event11.jpg',
        name: 'Lorem ipsum dollar'
  
      },
      {
        imge: 'assets/img/events/Event12.jpg',
        name: 'Sewing machine distribution program'
  
      }
    ]
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
