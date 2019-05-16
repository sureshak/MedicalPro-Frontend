import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AppointmentComponent } from './layouts/appointment/appointment.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
