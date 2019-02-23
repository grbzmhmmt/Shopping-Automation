import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { NotifyService } from '../services/notify.service';
import { CartService } from '../services/cart.service';
import { CART_ITEM_LIST } from '../cart/cart-item-list';
import { ActivatedRoute } from '@angular/router'
import { Pager } from '../app-pager';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: []
})
export class ProductComponent implements OnInit {

  products: Product[];
  pager:Pager=new Pager();
  constructor( private httpClient: HttpClient, @Inject('apiUrl') private apiUrl,
    private activatedRoute: ActivatedRoute, private notifyService: NotifyService, private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params["seoUrl"]);
    })
  }

  getProducts(seoCategories: string) {
    if (seoCategories) {
      this.httpClient.get<Product[]>(this.apiUrl + '/products/'+seoCategories).subscribe(response => {
        this.products = response;
        this.pager=this.GetPager(response.length);
      });
    } else {
      this.httpClient.get<Product[]>(this.apiUrl + '/products').subscribe(response => {
        this.products = response;
        this.pager=this.GetPager(response.length);
      });
    }
  }

  AddToCart(product: Product) {
    this.cartService.AddToCart(product);

    this.notifyService.SuccessMessage(product.productName);

    /*Denemek için Yapıldı
    CART_ITEM_LIST.forEach(el=>{
      console.log(el.product.productName);
    });
    this.notifyService.SuccessMessage(product.productName);
    this.notifyService.WarningMessage(product.productName);
    this.notifyService.ErrorMessage(product.productName);
    this.notifyService.InfoMessage(product.productName);
    */
  }

  GetPager(totalItems:number,currentPage:number=1,pageSize:number=3):Pager{
    let totalPages=Math.ceil(totalItems/pageSize);
    let pages:Array<number>=[];
    for(let i =1;i<=totalPages;i++){
      pages.push(i);
    }

    var pager=new Pager();

    pager.currentPage=currentPage;
    pager.pageSize=pageSize;
    pager.pageList=pages;

    return pager; 

  }

  SetPage(page:number){
    this.pager.currentPage=page;
  }
}