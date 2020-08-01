import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

export interface Appointment {
    name: string,
    age:number,
    date:Date,
    time:Time,
    disease:string,
    description:string
}

@Injectable({providedIn:'root'})
export class AppointmentSerice{

    appointments:Appointment[] = [];

    addAppointment(appointment:Appointment) {
        this.appointments.push(appointment);
    }
    getAppointments() {
        return this.appointments;
    }
    getAppointment(id:number){
        return this.appointments[id];
    }
}