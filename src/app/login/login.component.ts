import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  roles = ['Yearly Member','Admin','Retailer'];
  logInForm = new FormsModule();
  constructor() { }

  onSubmit(logInForm){

    console.log(this.logInForm = logInForm);
  }

}
