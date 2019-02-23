import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

  const routes: Routes = [
    { path: '', redirectTo:'products', pathMatch: 'full' },
    { path: 'products', component:ProductComponent },
    { path: 'products/:seoUrl', component:ProductComponent},
    { path: 'myCart', component:CartComponent},
   { path: 'shipping-detail', component:ShippingDetailComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide:'apiUrl',useValue:'http://northwindapi.azurewebsites.net/api'},
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
