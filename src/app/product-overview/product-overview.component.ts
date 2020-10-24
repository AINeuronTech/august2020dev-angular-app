import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  products = [
    {"id": 1, "name": "iPhone","description":"Smart Apple Phone"},
    {"id": 2, "name": "Laptop","description":"IBM Latest Laptop"},
    {"id": 3, "name": "TV", "description":"Samsung Smart TV"},
    {"id": 4, "name": "Table","description":"Standing Desk"},
    {"id": 5, "name": "Monitor", "description": "Asus Monitor"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
