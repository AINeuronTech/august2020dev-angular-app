import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication-services';
import {User} from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url:string = "http://192.168.0.9:5000/api/signUp"

  signUpForm = new FormGroup({
     userName: new FormControl(''),
     password: new FormControl(''),

  });

  user: User = new User();
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {}

  saveUserProfile(){
    this.authenticationService.createProfile(this.user).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
  }
  onSubmit(){
    console.log(this.user)
    this.authenticationService.createProfile(this.signUpForm.value).subscribe(
      response => console.log('Profile Created', response),
      error => console.log('Profile Creation Error', error)
    );
  }
}
