import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentSerice } from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
 
  constructor(private router: Router, private appointmentservice:AppointmentSerice) { }

  ngOnInit(): void {
    this.appointmentForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'disease': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  
  onSubmit() { 
    this.appointmentservice.addAppointment(this.appointmentForm.value);
    this.appointmentForm.reset();    
    console.log(this.appointmentservice.getAppointments());
    this.router.navigate(['/appointments']);
  }

}
