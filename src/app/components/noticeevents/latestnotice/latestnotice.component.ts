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
      title: 'SSC TOPPER 2020-21',
      img: 'assets/img/certificates/SSCTopper.jpg'
    },
    {
      title: 'Vacancy Announcement',
      img: 'assets/img/certificates/Announcement1.jpg'
    },
    {
      title: 'Vacancy Announcement',
      img: 'assets/img/certificates/Announcement2.jpg'
    },
    {
      title: 'NEET Topper 2019-20',
      img: 'assets/img/certificates/NEETTopper.png'
    },
    {
      title: 'Vacancy Announcement',
      img: 'assets/img/certificates/Announcement3.jpg'
    },
    {
      title: 'Vacancy Announcement',
      img: 'assets/img/certificates/Announcement4.jpg'
    },
    {
      title: 'Zakat Appeal',
      img: 'assets/img/certificates/certi1.jpg'
    },
    {
      title: 'HSC Topper 2019-20',
      img: 'assets/img/certificates/HSCTopper.jpg'
    },
    {
      title: 'Congratulates Jaykumar Vaidya!',
      img: 'assets/img/certificates/certi2.jpg'
    },

  ]
}
}
