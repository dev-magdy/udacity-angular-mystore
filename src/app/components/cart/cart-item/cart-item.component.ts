import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: cartItem;
  @Output() qchanged = new EventEmitter();

  constructor() {
    this.item = new cartItem();
  }

  ngOnInit(): void {
  }

}
