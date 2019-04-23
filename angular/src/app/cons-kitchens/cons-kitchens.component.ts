import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { providerModel } from '../models/providerModel';
import { kitchenModel } from '../models/kitchenModel';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cons-kitchens',
  templateUrl: './cons-kitchens.component.html',
  styleUrls: ['./cons-kitchens.component.css']
})
export class ConsKitchensComponent implements OnInit {
  kitchens: kitchenModel[]
  


  constructor(private kitchenservice: KitchenService, public session: SessionStorageService, private router: Router) { }

  ngOnInit() {
    var temp = this.kitchenservice.getprovider().subscribe(val => {console.log(val); 
      this.kitchens = val;
    });
  }

  setEvent(kitchen: kitchenModel) {
    this.kitchens = this.kitchens.filter(h => h == kitchen);
    this.session.set("kitchen",this.kitchens);
    this.router.navigate(['/consk2'])
  }

}
