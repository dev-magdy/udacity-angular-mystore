import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { cartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: cartItem[];
  confDetails: {name: string, amount: number} = {name: "", amount: 0};

  constructor() {
    this.items = []
  }

  getItems(): cartItem[] {
    return this.items
  }

  addItem(product: Product, q: number): void {
    const ind = this.items.findIndex(i => i.product.id == product.id);
    if (ind >= 0) {
      this.items[ind] = {product: product, q: this.items[ind].q + q}
    }
    else {
      this.items.push({product: product, q: q})
    }
    alert("Added to cart!")
  }

  removeItem(id: number): void {
    this.items = this.items.filter(i => i.product.id != id)
    alert("Item removed!")
  }

  updateTotal(itms: cartItem[]): number {
    this.items = itms;

    let amount = 0;
    for (let itm of itms) {
      amount += itm.product.price * itm.q;
    }
    return amount
  }

  setConfDetails(nam: string, amount: number): void {
    this.confDetails = {name: nam, amount: amount}
  }

  getConfDetails(): {name: string, amount: number} {
    return this.confDetails
  }
}
