import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BusBookingFormComponent } from './bus-booking-form.component';

describe('BusBookingFormComponent', () => {
  let component: BusBookingFormComponent;
  let fixture: ComponentFixture<BusBookingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusBookingFormComponent],
      providers: [FormBuilder],
    });

    fixture = TestBed.createComponent(BusBookingFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the bus booking form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on ngOnInit', () => {
    component.ngOnInit();
    expect(component.bookingForm).toBeTruthy();
  });

  it('should not show success message when only name is filled and form is submitted', () => {
    component.ngOnInit();
    const nameControl = component.bookingForm.get('name');
    nameControl?.setValue('John Doe'); // Use optional chaining to check if nameControl is not null
    component.submitForm();
    expect(component.showSuccessMessage).toBe(false);
  });

  it('should have invalid form when required fields are not filled', () => {
    component.ngOnInit();
    expect(component.bookingForm.valid).toBe(false);
  });

  it('should not show success message when only passengers are filled and form is submitted', () => {
    component.ngOnInit();
    const passengersControl = component.bookingForm.get('passengers');
    passengersControl?.setValue(2);
    component.submitForm();
    expect(component.showSuccessMessage).toBe(false);
  });

});
