import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
    products: Product[] = [];
    productForm = new FormGroup({
      name : new FormControl<string>(''),
      price : new FormControl<number>(0),
      desc : new FormControl<string>('')
    })
    constructor(private productService : ProductService, route: ActivatedRoute){

    }
    ngOnInit(): void {
        
    }
    submit(){
        const newProduct =  {
            name: this.productForm.value.name,
            price: this.productForm.value.price,
            desc: this.productForm.value.desc
        }
    }
}
