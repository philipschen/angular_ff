import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';

@Component({
  selector: 'app-cons-kitchens',
  templateUrl: './cons-kitchens.component.html',
  styleUrls: ['./cons-kitchens.component.css']
})
export class ConsKitchensComponent implements OnInit {
  kitchens: kitchenModel[]

  constructor(private kitchenservice: KitchenService) { }

  ngOnInit() {
    console.log(this.kitchenservice.getprovider().subscribe(val => console.log(val))); 
    this.kitchenservice.getprovider().subscribe(val => {console.log(val); this.kitchens = val});

  }

}
