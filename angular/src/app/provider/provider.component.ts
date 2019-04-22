import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { providerModel } from '../models/providerModel';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  input1 = []
  constructor(private registerservice: RegisterService) { }
  
  ngOnInit() {
    var x: providerModel = {
      service_provider_name: "tim1",
      Email: "tim@gmail.com",
      password: "blah1",
      reenter_password: "blah1",
    }
    // this.registerservice.addprovider(x).subscribe(val => console.log(val))
    console.log(this.registerservice.getprovider().subscribe(val => console.log(val))); 
  }

}