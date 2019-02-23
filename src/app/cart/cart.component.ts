import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { CartService } from '../services/cart.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  constructor(private cartService: CartService) { }
  isProductRemoved: boolean = false;

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {

    if (confirm('Are You Sure!')) {
      this.cartService.RemoveFromCart(product);
      this.isProductRemoved = true;
    }

  }

}
