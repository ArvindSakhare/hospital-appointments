import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookAppointmentComponent } from './appointments/book-appointment/book-appointment.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AppointmentSummaryComponent } from './appointments/appointment-summary/appointment-summary.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentComponent } from './appointments/appointment-list/appointment/appointment.component';

const appRoutes:Routes =[
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'book', component:BookAppointmentComponent},
  {path: 'summary', component:AppointmentSummaryComponent},
  {path: 'appointments', component:AppointmentListComponent, children:[
    {path: ':id', component: AppointmentComponent }]},
  {path: 'details', component:AppointmentComponent},
  {path: 'login', component:AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookAppointmentComponent,
    AuthComponent,
    HomeComponent,
    AppointmentSummaryComponent,
    AppointmentListComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
