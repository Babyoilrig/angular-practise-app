import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';


@Component({
  selector: 'app-home',
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ) {}

products: Product[] = [];


  ngOnInit() {
    this.productsService
    .getProducts('http://localhost:3000/clothes', {page: 0, perPage: 5})
    .subscribe((products: Products) => {
      this.products = products.items;

    })
  }
}
