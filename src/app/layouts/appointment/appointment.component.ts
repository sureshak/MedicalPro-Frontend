import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  styles: [`
        :host {
            display: inline-block;
            width:100%;
            position:relative;
        }
    `]
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
