import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  products:Product[];
  url: string = 'http://northwindapi.azurewebsites.net/api/products';

  getProducts(url:string):Product[] {
    this.httpClient.get<Product[]>(this.url).subscribe(response => {
      this.products=response;
      
    });

    return this.products;

  }



}
