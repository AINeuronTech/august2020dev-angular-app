import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.productId = id;
    });
  }

  goPrevious(): void {
    let previousId = this.productId - 1;
    this.router.navigate(['/products', previousId]);
  }

  goNext(): void {
    let nextId = this.productId + 1;
    this.router.navigate(['/products', nextId]);
  }

  gotoProducts(): void {
    let selectedId = this.productId ? this.productId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(): void {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showPrice(): void {
    this.router.navigate(['price'], {relativeTo: this.route});
  }
}
