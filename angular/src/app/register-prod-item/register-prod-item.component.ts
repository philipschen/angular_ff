import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { kitchenModel } from '../models/kitchenModel';


@Component({
  selector: 'app-register-prod-item',
  templateUrl: './register-prod-item.component.html',
  styleUrls: ['./register-prod-item.component.css']
})
export class RegisterProdItemComponent implements OnInit {

  items: FormArray;
  isAddPage = true;

  constructor(private registerservice: RegisterService, private formBuilder: FormBuilder, private router: Router, public session: SessionStorageService) { }
  registered = false;
  submitted = false;
  userForm: FormGroup;
  kitchen = this.session.get("kitchen")
  itemname = ""
  veg = false
  price = ""

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createFormItems()])
    });
  }

  createFormItems(): FormGroup {
    return this.formBuilder.group({
      itemname: ['', Validators.required],
      veg: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addEmptyFormItem(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.items = this.userForm.get('items') as FormArray;
      this.items.push(this.createFormItems());
      this.submitted = false;
    }
    console.log(this.userForm.get('items').value)
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      console.log("fail")
      return;
    } else {
      // HTTP request
      console.log("here")
      this.kitchen.item.push({"itemname": this.itemname,"veg": this.veg,"price": this.price})
      this.session.set("kitchen", this.kitchen)
      var x: kitchenModel = {
        name: this.session.get("prod_name"),
        workingdays: this.kitchen.workingdays,
        starttime: this.kitchen.starttime,
        endtime: this.kitchen.endtime,
        item: this.userForm.get('items').value
      }
      this.registerservice.addprovider_kit(x).subscribe(val => {console.log(val)
        this.router.navigate(['/'])})
      this.registered = true;
    }
  }

  invaliditemname() {
    return (this.submitted && this.userForm.controls.itemname.errors != null);
  }

  invalidveg() {
    return (this.submitted && this.userForm.controls.veg.errors != null);
  }

  invalidprice() {
    return (this.submitted && this.userForm.controls.price.errors != null);
  }

}
