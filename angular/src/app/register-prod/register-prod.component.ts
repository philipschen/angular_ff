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

  service_provider_name = ""
  email = ""
  password = ""
  confirm_password = ""
  ngOnInit() {
    // Form
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {
          // HTTP request
      var x: providerModel = {
        service_provider_name: this.service_provider_name,
        Email: this.email,
        password: this.password,
        reenter_password: this.confirm_password,
      }
      this.registerservice.addprovider(x).subscribe(val => console.log(val))
      this.registered = true;
    }
  }

  invalidUserName() {
    return (this.submitted && this.userForm.controls.username.errors != null);
  }

  invalidEmail() {
    return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidPassword() {
    return (this.submitted && this.userForm.controls.password.errors != null);
  }

  invalidConfirmPassword() {
    return (this.submitted && this.userForm.controls.confirm_password.errors != null);
  }

}
