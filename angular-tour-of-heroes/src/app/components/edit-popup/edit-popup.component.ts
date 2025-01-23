import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-edit-popup',
  imports: [
    DialogModule, 
    CommonModule, 
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Input() header: string;

  @Input() product: Product = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  @Output() confirm = new EventEmitter<Product>();

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.display = false;
  }

}
