import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../Models/add-product-response.model';
import { Product } from '../Models/product.model';
import { ProductResponse } from '../Models/product-response.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://host1.open.uom.lk:8000/"

  constructor(private http:HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'content-type' : 'application/json' }),
  };

  addProduct(product: Product) : Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(this.baseUrl + 'api/products', product, this.httpOptions);
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products');
  }
}
