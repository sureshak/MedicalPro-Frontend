import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  cars:any[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];

  this.cars=[
    {"vin":"test1","year" : "2101","brand":"new", "color": "red"},
    {"vin" : "test1","year" : "2101","brand":"new", "color": "red"},
    {"vin" : "test1","year" : "2101","brand":"new", "color": "red"},
    {"vin" : "test1","year" : "2101","brand":"new", "color": "red"},
    {"vin" : "test1","year" : "2101","brand":"new", "color": "red"}];
  }

}
