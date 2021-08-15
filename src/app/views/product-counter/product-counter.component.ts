import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.css']
})
export class ProductCounterComponent implements OnInit {
  amount:number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
