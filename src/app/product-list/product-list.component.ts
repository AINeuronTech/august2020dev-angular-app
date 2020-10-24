import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public selectedId;
  products = [
    {"id": 1, "name": "iPhone"},
    {"id": 2, "name": "Laptop"},
    {"id": 3, "name": "TV"},
    {"id": 4, "name": "Table"},
    {"id": 5, "name": "Monitor"},
    {"id": 6, "name": "Car"},
    {"id": 7, "name": "RAM"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

    } );
  }

  onSelect(product): void {
    //this.router.navigate(['/products', product.id]);
    this.router.navigate([product.id], { relativeTo: this.route });
  }

  isSelected(product) { return product.id === this.selectedId; }

}

