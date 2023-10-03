import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BusBookingFormComponent } from './bus-booking-form/bus-booking-form.component';

@NgModule({
  declarations: [AppComponent, BusBookingFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BusBookingFormComponent }, // Define your routes here
      // ... add more routes as needed
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
