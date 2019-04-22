import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterConsService } from '../services/register-cons.service';
import { consModel } from '../models/consumerModel';

@Component({
  selector: 'app-register-cons',
  templateUrl: './register-cons.component.html',
  styleUrls: ['./register-cons.component.css']
})

export class RegisterConsComponent implements OnInit {

  constructor(private registerservice: RegisterConsService, private formBuilder: FormBuilder, private router: Router) { }

  registered = false;
  submitted = false;
  userForm: FormGroup;

  service_provider_name = ""
  email = ""
  password = ""
  confirm_password = ""
  question1 = ""
  question2 = ""
  question3 = ""

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: ['', [Validators.required, Validators.minLength(5)]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
          // HTTP request
      var x: consModel = {
        service_provider_name: this.service_provider_name,
        Email: this.email,
        password: this.password,
        reenter_password: this.confirm_password,
        question1: this.question1,
        question2: this.question2,
        question3: this.question3,

      }
      this.registerservice.addCons(x).subscribe(val => {console.log(val)
        this.router.navigate(['/'])})
      
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

  invalidquestion1() {
    return (this.submitted && this.userForm.controls.question1.errors != null);
  }

  invalidquestion2() {
    return (this.submitted && this.userForm.controls.question2.errors != null);
  }

  invalidquestion3() {
    return (this.submitted && this.userForm.controls.question3.errors != null);
  }

}
