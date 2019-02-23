import { Injectable } from '@angular/core';
import { CartItem } from '../cart/cart-item';
import { Product } from '../product/product';
import { CART_ITEM_LIST } from '../cart/cart-item-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[];
  constructor() { }

  AddToCart(product: Product) {
    var addedItem = CART_ITEM_LIST.find(p => p.product.productId == product.productId);
    if (addedItem) {
      addedItem.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem)

    }

  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  clear() {
    CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
  }

  RemoveFromCart(product: Product) {
    var cartItem=CART_ITEM_LIST.find(p=>p.product.productId==product.productId);
    if(cartItem){
      if(cartItem.quantity==1){
        var indexNo=CART_ITEM_LIST.indexOf(cartItem);
        CART_ITEM_LIST.splice(indexNo,1);
      
      }
      else{
        cartItem.quantity--;
      }
    }
  }

}
