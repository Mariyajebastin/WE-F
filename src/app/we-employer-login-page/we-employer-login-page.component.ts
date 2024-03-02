import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebService} from "../web.service";

@Component({
  selector: 'app-we-employer-login-page',
  templateUrl: './we-employer-login-page.component.html',
  styleUrls: ['./we-employer-login-page.component.css']
})
export class WeEmployerLoginPageComponent {
  public loginForm : FormGroup | any;

  constructor(private http : WebService) {
    this.loginForm = new FormGroup({
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }

  doLogin(){
    const formData = this.loginForm.value;
    this.loginForm.reset()
    console.log('Form Data',formData);
    this.http.postEmployer(this.loginForm.value).subscribe(
      response =>{
        var res = JSON.parse(JSON.stringify(response))
        console.log(res);
      }
    )

  }
}
