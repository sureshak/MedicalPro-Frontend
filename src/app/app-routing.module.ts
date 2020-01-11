import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { BlogComponent } from './core/components/blog/blog.component';
import { ArticleComponent } from './core/components/article/article.component';
import { ContactComponent } from './core/components/contact/contact.component';

import { AppointmentComponent } from './layouts/appointment/appointment.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './layouts/login/login.component';
import { MapintegrationComponent } from './layouts/mapintegration/mapintegration.component';
import {SiteinfoComponent} from './layouts/siteinfo/siteinfo.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent    
  }, {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'article',
    component: ArticleComponent
  }, {
    path: 'contact',
    component: ContactComponent
  },{
    path: 'siteinfo',
    component: SiteinfoComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },{
    path: 'login',
    component: LoginComponent
  },
   { 
    path: '**', 
    component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'contactus';
}

