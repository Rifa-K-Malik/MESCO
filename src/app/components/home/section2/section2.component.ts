import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  images : any = []

  constructor() { }

  ngOnInit(): void {
    this.img()
  }
img() {
  this.images=[
    {
      imge: 'assets/img/events/Event1.jpg',
      name: 'Lorem ipsum dollar'

    },
    {
      imge: 'assets/img/events/Event10.jpg',
      name: 'Sewing machine distribution program'

    },
    {
      imge: 'assets/img/events/Event11.jpg',
      name: 'Mrgzxc dgdiwdl bxblwiqp'

    }
  ]
}
}
