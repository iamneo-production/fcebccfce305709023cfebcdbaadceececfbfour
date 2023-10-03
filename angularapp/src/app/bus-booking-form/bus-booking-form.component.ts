import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bus-booking-form',
  templateUrl: './bus-booking-form.component.html',
  styleUrls: ['./bus-booking-form.component.css']
})
export class BusBookingFormComponent{
  bookingForm!: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passengers: ['', [Validators.required, Validators.min(1)]],
      departureDate: [''],
      destination: [''],
      seatType: ['']
    });
  }

  submitForm(): void {
    if (this.bookingForm.valid) {
      // Perform form submission logic here
      this.showSuccessMessage = true;
    }
  }

  resetForm(): void {
    this.bookingForm.reset();
    this.showSuccessMessage = false;
  }
}
