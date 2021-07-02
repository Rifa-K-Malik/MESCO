import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  images : any = [
    "assets/img/EducationAid.jpg",
    "assets/img/africa-wallpapers.jpg",
    "assets/img/MedicalAid.jpg",
    "assets/img/ClinicsDispensaries.jpg",
  ]

  constructor() { }

  ngOnInit(): void {
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
