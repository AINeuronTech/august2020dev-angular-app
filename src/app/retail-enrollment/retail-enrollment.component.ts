import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-retail-enrollment',
  templateUrl: './retail-enrollment.component.html',
  styleUrls: ['./retail-enrollment.component.css']
})
export class RetailEnrollmentComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  retailEnrollmentForm = this.fb.group({
    userName: [''],
    companyName: [''],
    companyPhoneNumber: [''],
    password: [''],
    corporateAddress: this.fb.group({
      streetAddress: [''],
      city: [''],
      state: [''],
      country: ['']
    })
  });

  ngOnInit(): void {

  }

  onSubmit(retailEnrollmentForm){

  }

}
