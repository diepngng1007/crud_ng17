import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
    products: Product[] = [];
    productForm = new FormGroup({
      name : new FormControl<string>(''),
      price : new FormControl<number>(0),
      desc : new FormControl<string>('')
    })
    
    constructor(private productService : ProductService, private router: Router){}
    ngOnInit(): void {
        this.submit()
    }
    submit(){
        const newProduct = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
            desc: this.productForm.value.desc || ''
        }
        this.productService.addProduct(newProduct).subscribe({
            next: (res) => {
                console.log(res)
                this.products.push(newProduct)
                alert('success')
                // this.router.navigateByUrl('/')
            },
            error: (err) => {
                console.log(err)
            }

        })
        console.log(this.productForm.value)
    }
}
