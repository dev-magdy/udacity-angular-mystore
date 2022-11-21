import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: cartItem[] = [];
  totalAmount: number = 0;
  cusName: string = "";
  address: string = "";
  cardNum: string = "";

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) {
      this.updateTotal()
    }
  }

  updateTotal(): void {
    this.totalAmount = Math.round(this.cartService.updateTotal(this.items) * 100) / 100
  }

  handleQuantity(item: cartItem): void {
    if (item.q == 0) {
      this.cartService.removeItem(item.product.id);
      this.items = this.cartService.getItems();
      this.updateTotal()
    }
    else {
      this.updateTotal()
    }
  }

  onSubmit(): void {
    this.cartService.setConfDetails(this.cusName, this.totalAmount);
    this.router.navigateByUrl("/components/confirmation")
  }
}
