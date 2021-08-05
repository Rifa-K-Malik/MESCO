import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
bank: any = []

  constructor() { }

  ngOnInit(): void {
    this.bankdetail()
  }
  bankdetail() {
    this.bank=[
      {
        title: `Bank :`,
        des: `STATE BANK OF INDIA`
      },
      {
        title: `Holder :`,
        des: `MESCO or (Modern Education Social & Cultural Organization)`
      },
      {
        title: `Account Number :`,
        des: `10892939426`
      },
      {
        title: `Branch Name :`,
        des: `Mahim Branch`
      },
      {
        title: `IFSC Code :`,
        des: `SBIN0003837`
      },
      {
        title: `Bank Code`,
        des: `3837`
      },
    ]
  }

}
