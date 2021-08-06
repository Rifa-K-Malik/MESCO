import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MdonateComponent } from './components/mdonate/mdonate.component';
import { NoticeeventsComponent } from './components/noticeevents/noticeevents.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
    {
    path: 'donate',
    component: MdonateComponent
  },
    {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'notice',
    component: NoticeeventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
