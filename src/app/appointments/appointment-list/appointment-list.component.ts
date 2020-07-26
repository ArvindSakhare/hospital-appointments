import { Component, OnInit } from '@angular/core';
import { AppointmentSerice, Appointment } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments:Appointment[];
  constructor(private appointmentService:AppointmentSerice) { }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }

}
