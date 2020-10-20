import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public selectedId;
  products = [
    {"id": 1, "name": "iPhone"},
    {"id": 2, "name": "Laptop"},
    {"id": 3, "name": "TV"},
    {"id": 4, "name": "Table"},
    {"id": 5, "name": "Monitor"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

    } );
  }

  onSelect(product) {
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([product.id], { relativeTo: this.route });
  }

  isSelected(product) { return product.id === this.selectedId; }
}
