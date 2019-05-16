import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AppointmentComponent } from './layouts/appointment/appointment.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './layouts/login/login.component';
import { AppointmentListComponent } from './layouts/appointment-list/appointment-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'listing',
    component:AppointmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
