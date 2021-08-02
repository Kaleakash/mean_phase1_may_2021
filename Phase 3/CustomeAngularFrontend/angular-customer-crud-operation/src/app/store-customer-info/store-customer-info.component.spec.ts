import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCustomerInfoComponent } from './store-customer-info.component';

describe('StoreCustomerInfoComponent', () => {
  let component: StoreCustomerInfoComponent;
  let fixture: ComponentFixture<StoreCustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCustomerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
