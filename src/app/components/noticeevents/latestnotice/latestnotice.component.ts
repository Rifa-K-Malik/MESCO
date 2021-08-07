import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestnotice',
  templateUrl: './latestnotice.component.html',
  styleUrls: ['./latestnotice.component.scss']
})
export class LatestnoticeComponent implements OnInit {
  mesco: any = []

  constructor() { }

  ngOnInit(): void {
    this.awd()
  }
awd() {
  this.mesco = [
    {
      title: 'Condolence Meeting',
      img: 'assets/img/certificates/certi1.jpg'
    },
    {
      title: 'Zakat Appeal',
      img: 'assets/img/certificates/certi2.jpg'
    },
    {
      title: 'Congratulates Jaykumar Vaidya!',
      img: 'assets/img/certificates/certi3.jpg'
    },
    {
      title: 'MESCO In Media',
      img: 'assets/img/certificates/certi4.jpg'
    },
    {
      title: 'Condolence Meeting',
      img: 'assets/img/certificates/certi1.jpg'
    },
    {
      title: 'Zakat Appeal',
      img: 'assets/img/certificates/certi2.jpg'
    },
    {
      title: 'Congratulates Jaykumar Vaidya!',
      img: 'assets/img/certificates/certi3.jpg'
    },
    {
      title: 'MESCO In Media',
      img: 'assets/img/certificates/certi4.jpg'
    },

  ]
}
}
