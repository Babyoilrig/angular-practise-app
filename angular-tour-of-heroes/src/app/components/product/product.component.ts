import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../../../types';
import { Rating } from 'primeng/rating';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    Rating, 
    FormsModule,
    ButtonModule,
    ConfirmPopupModule
    
  ],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  constructor(private confirmationService: ConfirmationService){}

  //Below allows us to fetch button cod=s we've iven it a #
  @ViewChild('deleteButton') deleteButton: any;
  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }

confirmDelete() {
  this.confirmationService.confirm({
  target: this.deleteButton.nativeElement,
    message: 'Are you sure that you want to delete this product?',
    accept: () => {
      this.deleteProduct();
    },
  });
}

  deleteProduct() {
    this.delete.emit(this.product);
  }

  ngOnit() {
    
  }
}
