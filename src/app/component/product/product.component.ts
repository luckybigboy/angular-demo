import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private _products: Array<Product>;
  set products(val) {
    this._products = val;
  }
  get products() {
    return this._products;
  }
  constructor() { }

  ngOnInit() {
    this._products = [
      new Product(1, "第一件商品", 4320, 2.5, "好手机不多说......."),
      new Product(2, "第二件商品", 23234, 3.5, "好手机不多说......."),
      new Product(3, "第三件商品", 4320, 5, "人家卖的是系统，而android机卖的是性能32323232323esfgfdsddsddsdsd"),
      new Product(4, "第四件商品", 2323, 4, "好手机不多说......."),
      new Product(5, "第五件商品", 4320, 1.5, "好手机不多说......."),
      new Product(6, "第六件商品", 2234, 3.5, "人家卖的是系统，而android机卖的是性能32323232323"),
      new Product(7, "第七件商品", 4320, 2.5, "好手机不多说......."),
      new Product(8, "第八件商品", 2334, 4, "人家卖的是系统，而android机卖的是性能")
    ]
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string
  ) {

  }
}
