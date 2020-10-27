import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailEnrollmentComponent } from './retail-enrollment.component';

describe('RetailEnrollmentComponent', () => {
  let component: RetailEnrollmentComponent;
  let fixture: ComponentFixture<RetailEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
