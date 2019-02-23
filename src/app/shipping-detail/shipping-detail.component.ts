import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ShippingDetail } from './shipping-detail';
import { NotifyService } from '../services/notify.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {

  constructor(private notifyService: NotifyService, private cartService: CartService, private router: Router) { }

  model: ShippingDetail = new ShippingDetail('', '', true, -1);
  cities = [];
  ngOnInit() {
    this.cities.push(
      { 'id': '1', 'name': 'İstanbul' },
      { 'id': '2', 'name': 'Ankara' },
      { 'id': '3', 'name': 'London' },
      { 'id': '4', 'name': 'Malatya' },
    );
  }

  checkout(shippingForm: NgForm) {
    if (shippingForm.invalid) {
      return;

    } else {
      this.cartService.clear();
      this.notifyService.PaySuccess("Succesfull Shopping Compleated");
      this.router.navigate(['products']);
    }

  }

}
