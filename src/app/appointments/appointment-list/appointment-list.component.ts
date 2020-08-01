import { Component, OnInit } from '@angular/core';
import { AppointmentSerice, Appointment } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments:Appointment[];
  helpText: string = null;
  isEmpty = true;
  constructor(private appointmentService:AppointmentSerice) { }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
    if(this.appointments.length === 0){
      this.helpText = "No Appointments available! Enjoy your day";
      console.log("isEmpty true: "+this.appointments.length);
    } else {
      this.isEmpty = false;
      console.log("isEmpty false"+this.appointments.length);

    }
  }

}
