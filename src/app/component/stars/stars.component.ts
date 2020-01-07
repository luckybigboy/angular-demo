import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input()
  private ratings: number = 0;
  private _starArr: boolean[];
  set starArr(val) {
    this._starArr = val;
  }
  get starArr() {
    return this._starArr;
  }
  constructor() { }

  ngOnInit() {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(i > this.ratings);
    }
    this._starArr = arr;
  }

}
