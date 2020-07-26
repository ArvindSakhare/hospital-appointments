import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  @Input() appointment:Appointment;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
