import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  signupUrl:string = "http://localhost:5000/api/signUp";
  loginUrl:string = "http://localhost:5000/api/login";
  private headers: Headers;
  constructor(private http: HttpClient){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  createProfile(user:User):Observable<Object>{
    return this.http.post(this.signupUrl, user);
  }

  profileLogin(user:User):Observable<Object>{
      return this.http.post(this.loginUrl, user);
    }

}
