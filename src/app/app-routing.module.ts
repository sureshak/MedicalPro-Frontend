import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AppointmentComponent } from './layouts/appointment/appointment.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './layouts/login/login.component';
import { MapintegrationComponent } from './layouts/mapintegration/mapintegration.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        component:AppointmentComponent,
        path :'appointment'
      },{
        path:'login',
        component:LoginComponent
      },{
        path:'contact',
        component:MapintegrationComponent
      }
    ]
  },
  {
    path:"header",
    component:HeaderComponent
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

