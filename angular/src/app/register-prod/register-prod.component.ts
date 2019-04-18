import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { providerModel } from '../models/providerModel';


@Component({
  selector: 'app-register-prod',
  templateUrl: './register-prod.component.html',
  styleUrls: ['./register-prod.component.css']
})
export class RegisterProdComponent implements OnInit {

  constructor(private registerservice: RegisterService, private formBuilder: FormBuilder) { }
  
  registered = false;
  submitted = false;
  userForm: FormGroup;

  ngOnInit() {
    // Form
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    // HTTP request
    var x: providerModel = {
      service_provider_name: "tim1",
      Email: "tim@gmail.com",
      password: "blah1",
      reenter_password: "blah1",
    }
    this.registerservice.addprovider(x).subscribe(val => console.log(val))
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {
      this.registered = true;
    }
  }

  invalidFirstName() {
    return (this.submitted && this.userForm.controls.first_name.errors != null);
  }

  invalidLastName() {
    return (this.submitted && this.userForm.controls.last_name.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidZipcode() {
    return (this.submitted && this.userForm.controls.zipcode.errors != null);
  }

  invalidPassword() {
    return (this.submitted && this.userForm.controls.password.errors != null);
  }

}
