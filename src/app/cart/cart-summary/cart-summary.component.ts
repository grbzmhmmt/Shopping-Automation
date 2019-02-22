import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit,DoCheck {
  
  ngDoCheck(): void {
    //aşağıdaki a totalCartItem a atayacağım değer b ise service list inden gelen herbir nesne
    this.totalCartItem=this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice=this.cartService.list().reduce((a,b)=>a+b.product.unitPrice*b.quantity,0);
    this.cartItems=this.cartService.list();
    console.log(this.totalCartItemPrice);
  }

  constructor(private cartService:CartService) { }

  totalCartItem:number;
  totalCartItemPrice:number;
  cartItems:CartItem[];

  ngOnInit() {
    
  }



}
