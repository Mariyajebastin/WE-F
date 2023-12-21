import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-we-login-page',
  templateUrl: './we-login-page.component.html',
  styleUrls: ['./we-login-page.component.css']
})
export class WeLoginPageComponent {
  public loginForm : FormGroup | any;

  constructor() {
    this.loginForm = new FormGroup({
      email_id : new FormControl('',Validators.required),
      password :new FormControl('',Validators.required)
    })
  }

  doLogin() {
    const formData = this.loginForm.value;

    console.log('Form Data',formData);
  }
}
