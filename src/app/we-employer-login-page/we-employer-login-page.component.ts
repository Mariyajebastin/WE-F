import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-we-employer-login-page',
  templateUrl: './we-employer-login-page.component.html',
  styleUrls: ['./we-employer-login-page.component.css']
})
export class WeEmployerLoginPageComponent {
  public loginForm : FormGroup | any;

  constructor() {
    this.loginForm = new FormGroup({
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  doLogin(){
    const formData = this.loginForm.value;

    console.log('Form Data',formData);
  }
}
