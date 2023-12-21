import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-we-employer-signup-page',
  templateUrl: './we-employer-signup-page.component.html',
  styleUrls: ['./we-employer-signup-page.component.css']
})
export class WeEmployerSignupPageComponent {
  public signupForm : FormGroup | any;

  constructor() {
    this.signupForm = new FormGroup({
      company_name : new FormControl(),
      gst_or_pan_number : new FormControl(),
      industry_type : new FormControl(),
      email_id : new FormControl(),
      telephone_no : new FormControl(),
      registered_address : new FormControl(),
      unit_address : new FormControl(),
      company_breif : new FormControl()
    })
  }

  doSubmit() {
    const formData = this.signupForm.value;

    console.log('Form Data',formData);
  }
}
