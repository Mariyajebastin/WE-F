import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-we-profile-details',
  templateUrl: './we-profile-details.component.html',
  styleUrls: ['./we-profile-details.component.css']
})
export class WeProfileDetailsComponent {
  public profileForm : FormGroup | any;

  constructor() {
    this.profileForm = new FormGroup({
      name : new FormControl('',Validators.required),
      email_id : new FormControl(),
      mobile_no : new FormControl(),
      job_title : new FormControl(),
      skills : new FormControl(),
      education : new FormControl()
    })
  }

  doSave(){
    const formData = this.profileForm.value;

    console.log('Form Data',formData);
  }
}
