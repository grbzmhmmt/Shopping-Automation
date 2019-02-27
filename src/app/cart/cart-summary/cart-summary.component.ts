import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../cart-item';
import { NotifyService } from 'src/app/services/notify.service';

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
  }

  constructor(private cartService:CartService,private notifyService:NotifyService) { }

  totalCartItem:number;
  totalCartItemPrice:number;
  cartItems:CartItem[];

  ngOnInit() {
    
  }

  RemoveFromCart(cartItem:CartItem){
    this.cartService.RemoveFromCart(cartItem.product);
    this.notifyService.ErrorMessage(cartItem.product.productName)
  }

}
