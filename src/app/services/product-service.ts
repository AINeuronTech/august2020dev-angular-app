import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = "http://localhost:5000/api/product";
  private headers: Headers;


  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  createProduct(){
    this.http.post().subscribe()
  }

}
