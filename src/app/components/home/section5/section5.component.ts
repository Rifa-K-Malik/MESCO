import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {
  people: any = []

  constructor() { }

  ngOnInit(): void {
    this.stry()
  }
  stry() {
    this.people = [
      {
        title: 'Sucess Stories',
        story: ` "Mushira Mudassir Ansari, 17 months old special baby girl is resident of Kurla Quresh Nagar Hill. The
        family belongs to Jharkhand. She was diagnosed and treated for infantile hypotonia and delayed motor
        milestone. The condition was causing delayed developmental milestones like walking, speaking, sitting
        and other physical activities as per her age. Her mother visited the MESCO Physiotherapy Clinic in May
        2019. The primary goal was to enable and correct the condition of her lower limb, thus enabling her to
        sit with least support. Within one and half months she started sitting on her own and crawling. In the
        last four and half months Mushira has been undergoing therapy and is showing positive results. By the
        end of September, she was able to stand with minimum support and walk on her own with support. The
        change in the condition of Mushira’s health has brought happiness to her family. They are very thankful
        to MESCO." `,
        name: ' Baby Mushira',
      },
  
      {
        title: `Donor say's`,
        story: ` MESCO is one such catalyst from the cluster of organizations working in development sector in Mumbai for last 50 years with an objective of working for the social upliftment of the backward section of the society. The education schemes devised by the organization are in such a manner which focuses majorly on providing education to girl child right from pre-schooling years till they complete their higher education. MESCO has given wings to girl students so that they can fly in their careers with beautiful colours. `,
        name: ' Ravinder S. Lohia',
        name2: 'PMO Manager, Nokia'
      },
  
    ]
  }
}
