import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class LogInService{
  url:string = "http://localhost:8082/api"

  constructor(private http: HttpClient){}

  login(userLogIn){
    return this.http.post(this.url,userLogIn);
  }
}
