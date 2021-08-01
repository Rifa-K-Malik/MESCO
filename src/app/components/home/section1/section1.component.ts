import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  images : any = []

  constructor() { }

  ngOnInit(): void {
    this.slides()
  }

  slides() {
    this.images = [
      {
        img: 'assets/img/EducationAid.jpg',
        text: 'EDUCATIOAL SCHOLARSHIPS'
      },
      {
        img: 'assets/img/PovertyRelief.jpg',
        text: 'POVERTY RELIEF'
      },
      {
        img: 'assets/img/MedicalAid.jpg',
        text: 'MEDICAL AID'
      },
      {
        img: 'assets/img/ClinicsDispensaries.jpg',
        text: 'CLINIC AND DISPENSARIES'
      },
  
    ]
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:5,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      786: {
        items: 1,
      },
    },
    nav: false,
  };
}
