import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  texto : string = 'Similia Homoeo Cure';
  lat: number = 12.036596;
  lng: number = 75.359227;
  zoom: number = 15;
}

