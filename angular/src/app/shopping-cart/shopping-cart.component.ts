import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart = []
  constructor(public session: SessionStorageService, private router: Router) { }

  ngOnInit() {
    this.cart = this.session.get("cart");
    console.log(this.cart)
  }

  setEvent(){
    this.cart = []
    this.session.clear()
  }

  setEvent2(){
    this.router.navigate(["/consk"])
  }

}
