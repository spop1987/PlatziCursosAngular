import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';
import { ProductDto } from '../dtos/product.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  createProduct(productDto: ProductDto) {
    return this.http.post<Product>(this.apiUrl, productDto);
  }

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  getProductById(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
