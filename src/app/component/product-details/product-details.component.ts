import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private _productTitle: any;
  set productTitle(val) {
    this._productTitle = val;
  }
  get productTitle() {
    return this._productTitle;
  }
  constructor(
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this._productTitle = this.routerInfo.snapshot.params['productTitle'];
  }

}
