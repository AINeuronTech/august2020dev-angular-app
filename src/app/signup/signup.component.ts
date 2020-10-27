import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required, Validators.minLength[5]),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      streetAddress: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
      country: new FormControl('')
    })
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm){
    console.log(this.signUpForm.value)
  }
}
