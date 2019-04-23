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
  kitchen: kitchenModel
  item: [{"itemname": String,
        "veg": Boolean,
        "price": String,
    }]
  constructor(private kitchenservice: KitchenService, public session: SessionStorageService) { }

  ngOnInit() {
    this.kitchen = this.session.get("kitchen")[0]
    console.log(this.kitchen)
  }

  setEvent(item: any) {
    // this.kitchens = this.kitchens.filter(h => h == kitchen);
    // this.session.set("kitchen",this.kitchens);
    // console.log(this.kitchens)
    // this.router.navigate(['/consk2'])
  }

}
