import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product';
import { ProductList } from './product-list.mock';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct:string;
  constructor(private productService: ProductService, private httpClient: HttpClient, @Inject('apiUrl') private apiUrl) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.httpClient.get<Product[]>(this.apiUrl + '/products').subscribe(response => {
      this.products = response;
    });
  }

  AddToCart(product:Product){
    this.addedProduct=product.productName;
    
  }
  
}