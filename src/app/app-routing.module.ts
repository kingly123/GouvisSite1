import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';
import { MediaMainComponent } from './components/Media/media-main/media-main.component';
import { ContactMainComponent } from './components/Contact/contact-main/contact-main.component'; 
import { AboutUsMainComponent } from './components/AboutUs/about-us-main/about-us-main.component';
import { VipProfileComponent } from './components/AboutUs/vip-profile/vip-profile.component';
import { PortfolioMainComponent } from './components/Portfolio/portfolio-main/portfolio-main.component';
import { PortfolioProjectDetailComponent } from './components/Portfolio/portfolio-project-detail/portfolio-project-detail.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'services',
    component: ServiceMainComponent
  },
  {
    path: 'media',
    component: MediaMainComponent
  },
  {
    path: 'contact',
    component: ContactMainComponent
  },
  {
    path: 'about-us',
    component: AboutUsMainComponent
  },
  {
    path: 'person',
    component: VipProfileComponent
  },
  {
    path: 'portfolio',
    component: PortfolioMainComponent
  },
  {
    path: 'abc',
    component: PortfolioProjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
