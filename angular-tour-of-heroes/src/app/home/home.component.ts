import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';


@Component({
  selector: 'app-home',
  imports: [ProductComponent, PaginatorModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ) {}

products: Product[] = [];

totalRecords: number = 0;
rows: number = 5;

onProductOutput(product: Product) {
  console.log(product, 'Output'); 
}

onPageChange(event:any) {
  this.fetchProducts(event.page, event.rows);
}

fetchProducts (page: number, perPage: number) {
  this.productsService
  .getProducts('http://localhost:3000/clothes', {page, perPage})
    .subscribe((products: Products) => {
      this.products = products.items;
      this.totalRecords = products.total;
    });
  }

  editProduct(product: Product) {
    console.log(product, 'Edit');
  }

  deleteProduct(product: Product) {
    console.log(product, 'Delete');
  }

  addProduct(product: Product) {
    console.log(product, 'Add');
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
