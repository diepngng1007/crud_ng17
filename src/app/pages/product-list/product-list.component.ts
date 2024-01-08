import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
    products : Product[] = []
    http = inject(HttpClient)
    constructor(private productService: ProductService) {}
    ngOnInit(): void {
        this.selectProduct()
    }
    selectProduct() {
      this.productService.getProduct().subscribe(
        (products) => {
          console.log(products)
          this.products = products
        },
        (error) => {
          console.log(error)
        }
      )
    }
    
    deleteProduct(id: string | undefined){
      if(!id){
        return
      }
        this.productService.deleteProduct(id).subscribe({
           next: (products) => {
              console.log(products)
              this.selectProduct()
           },
           error: (err) => console.log(err)
        })
    }
    
}
