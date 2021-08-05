import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { MainheaderComponent } from './components/mainheader/mainheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1Component } from './components/home/section1/section1.component';
import { Section2Component } from './components/home/section2/section2.component';
import { Section3Component } from './components/home/section3/section3.component';
import { Section4Component } from './components/home/section4/section4.component';
import { Section5Component } from './components/home/section5/section5.component';
import { Section6Component } from './components/home/section6/section6.component';
import { Section7Component } from './components/home/section7/section7.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DonateComponent } from './donate/donate.component';
import { VolunterComponent } from './volunter/volunter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopheaderComponent,
    MainheaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    DonateComponent,
    VolunterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
