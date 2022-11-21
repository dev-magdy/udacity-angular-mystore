import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<[]>('assets/data.json');
  }

  getProductById(id: number): Observable<Product[]> {
    return this.getProducts().pipe(map(list => list.filter(p => p.id == id)))
  }
}
