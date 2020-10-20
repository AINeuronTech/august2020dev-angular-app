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
    {"id": 5, "name": "Monitor"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

    } );
  }

  onSelect(product): void {
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([product.id], { relativeTo: this.route });
  }

  isSelected(department) { return department.id === this.selectedId; }

}

