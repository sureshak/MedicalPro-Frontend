import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AppointmentComponent } from './layouts/appointment/appointment.component';
import { LoginComponent } from './layouts/login/login.component';
import { MapintegrationComponent } from './layouts/mapintegration/mapintegration.component'; 
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AppointmentComponent,
    LoginComponent,
    MapintegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZ9HJfT7gRYu9myPQcVa7DSwWEjJtFc50'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
