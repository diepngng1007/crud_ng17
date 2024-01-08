import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteProduct, Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    api = 'http://localhost:3000/products'
    constructor(private http: HttpClient){}
    getProduct(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.api}`)
    }
    addProduct(product : Product): Observable<Product> {
        return this.http.post<Product>(`${this.api}`, product)
    }
    updateProduct(id: string, product : DeleteProduct): Observable<DeleteProduct> {
        return this.http.put<DeleteProduct>(`${this.api}/${id}`, product)
    }
    deleteProduct(id: string): Observable<DeleteProduct> {
        return this.http.delete<DeleteProduct>(`${this.api}/${id}`)
    }
}
