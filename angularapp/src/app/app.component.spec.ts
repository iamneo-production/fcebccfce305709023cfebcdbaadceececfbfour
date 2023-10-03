import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA] // Use NO_ERRORS_SCHEMA to suppress unknown element errors
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should have title as Bus Booking App', () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bus Booking App');
  });

  it('should render the app bus booking form', () => {
    const appElement: HTMLElement = fixture.nativeElement;
    const appBusBookingForm = appElement.querySelector('app-bus-booking-form');
    expect(appBusBookingForm).toBeTruthy();
  });
});
