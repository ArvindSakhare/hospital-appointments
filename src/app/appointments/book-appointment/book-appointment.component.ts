import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentSerice, Appointment } from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  appointment: Appointment;
  isBooked= false;
 
  constructor(private router: Router, private appointmentservice:AppointmentSerice) { }

  ngOnInit(): void {
    this.appointmentForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'date': new FormControl(null),
      'time': new FormControl(null),
      'disease': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  
  onSubmit() { 
    this.appointment = this.appointmentForm.value;
    this.appointmentservice.addAppointment(this.appointmentForm.value);
    this.isBooked = true;
    console.log(this.appointmentForm.value.date);
    console.log(this.appointmentForm.value.time);
    this.appointmentForm.reset();
  }

}
