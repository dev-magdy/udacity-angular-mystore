import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product;
  qVals: number[];
  q: number;

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private cartService: CartService) {
    this.product = new Product();
    this.qVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.q = 1
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productsService.getProductById(params["id"]).subscribe(data => {
        this.product = data[0]
      })
    })
  }

  addToCart(): void {
    this.cartService.addItem(this.product, this.q);
  }
}
