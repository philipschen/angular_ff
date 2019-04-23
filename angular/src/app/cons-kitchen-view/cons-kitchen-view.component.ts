import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-cons-kitchen-view',
  templateUrl: './cons-kitchen-view.component.html',
  styleUrls: ['./cons-kitchen-view.component.css']
})
export class ConsKitchenViewComponent implements OnInit {
  kitchens: kitchenModel[]

  constructor(private kitchenservice: KitchenService, public session: SessionStorageService) { }

  ngOnInit() {
  }

}
