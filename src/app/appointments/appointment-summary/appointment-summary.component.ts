import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentSerice, Appointment } from '../appointment.service';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.css']
})
export class AppointmentSummaryComponent implements OnInit {
  id:number;
  appointment:Appointment;
  constructor(private route:ActivatedRoute, private router:Router,private appointmentService:AppointmentSerice) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
      this.appointment = this.appointmentService.getAppointment(this.id);
      console.log(this.appointment);
    });

  }

}
