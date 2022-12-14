import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  qVals: number[];
  q: number;

  constructor(private cartService: CartService) {
    this.product = new Product();
    this.qVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.q = 1
  }

  ngOnInit(): void {

  }

  addToCart(): void {
    this.cartService.addItem(this.product, this.q);
  }

}
