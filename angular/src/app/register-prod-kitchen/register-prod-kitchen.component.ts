import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { kitchenModel } from '../models/kitchenModel';

@Component({
  selector: 'app-register-prod-kitchen',
  templateUrl: './register-prod-kitchen.component.html',
  styleUrls: ['./register-prod-kitchen.component.css']
})
export class RegisterProdKitchenComponent implements OnInit {

  constructor(private registerservice: RegisterService, private formBuilder: FormBuilder, private router: Router) { }

  registered = false;
  submitted = false;
  userForm: FormGroup;

  Monday = false;
  Tuesday = false;
  Wednesday = false;
  Thursday = false;
  Friday = false;
  Saturday = false;
  Sunday = false;
  starttime = "123";
  endtime = "123";

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Monday: [''],
      Tuesday: [''],
      Wednesday: [''],
      Thursday: [''],
      Friday: [''],
      Saturday: [''],
      Sunday: [''],
      starttime: [''],
      endtime: [''],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid === true) {
      console.log("fail")
      return;
    } else {
      console.log(this.starttime)
      console.log(this.endtime)
          // HTTP request
      var x: kitchenModel = {
        workingdays: {"monday": this.Monday, 
          "tuesday": this.Tuesday,
          "wednesday": this.Wednesday,
          "thursday": this.Thursday,
          "friday": this.Friday,
          "saturday": this.Saturday,
          "sunday": this.Sunday,
        },
        starttime: this.starttime,
        endtime: this.endtime,
        item: {"itemname": "this",
          "veg": false,
          "price": "2",
        }
      }

      this.registerservice.addprovider_kit(x).subscribe(val => {console.log(val)
        this.router.navigate(['/'])})
      this.registered = true;
      
      
    }
  }

  invalidstarttime() {
    return (this.submitted && this.userForm.controls.starttime.errors != null);
  }

  invalidendtime() {
    return (this.submitted && this.userForm.controls.endtime.errors != null);
  }

}
