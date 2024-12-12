import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [
    Rating, 
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnit() {
    this.productOutput.emit(this.product);
  }
}
