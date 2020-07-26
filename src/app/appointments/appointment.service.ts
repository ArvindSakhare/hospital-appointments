import { Injectable } from '@angular/core';

export interface Appointment {
    name: string,
    age:number,
    disease:string,
    description:string
}

@Injectable({providedIn:'root'})
export class AppointmentSerice{

    appointments:Appointment[] = [];

    addAppointment(appointment:Appointment) {
        console.log(appointment);
        this.appointments.push(appointment);
    }
    getAppointments() {
        return this.appointments;
    }
}