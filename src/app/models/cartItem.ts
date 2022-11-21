import { Product } from 'src/app/models/Product';

export class cartItem {
	product: Product;
    q: number;

    constructor() {
    this.product = new Product();
    this.q = 1
    }
}