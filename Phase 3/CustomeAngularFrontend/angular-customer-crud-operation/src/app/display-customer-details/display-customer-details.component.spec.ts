import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustomerDetailsComponent } from './display-customer-details.component';

describe('DisplayCustomerDetailsComponent', () => {
  let component: DisplayCustomerDetailsComponent;
  let fixture: ComponentFixture<DisplayCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCustomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
