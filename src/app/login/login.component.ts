import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {User} from '../user';
import {AuthenticationService} from '../services/authentication-services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),

  });

  user: User = new User();
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onSubmit(){
    console.log(this.user)
    this.authenticationService.profileLogin(this.loginForm.value).subscribe( data =>{
        console.log('Profile Found');
        this.goToProductList();
    },
      error => console.log('Profile not Found Error', error)
    );
  }

  goToProductList(){
    this.router.navigate(['/products'])
  }

}
