import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapintegration',
  templateUrl: './mapintegration.component.html',
  styleUrls: ['./mapintegration.component.css']
})

export class MapintegrationComponent {
  texto : string = 'Similia Homoeo Cure';
  lat: number = 12.036596;
  lng: number = 75.359227;
  zoom: number = 15;
}

