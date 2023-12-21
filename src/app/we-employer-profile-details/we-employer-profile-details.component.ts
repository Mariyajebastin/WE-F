import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {animate} from "@angular/animations";

@Component({
  selector: 'app-we-employer-profile-details',
  templateUrl: './we-employer-profile-details.component.html',
  styleUrls: ['./we-employer-profile-details.component.css']
})
export class WeEmployerProfileDetailsComponent {
  public profileForm : FormGroup | any;

  constructor() {
    this.profileForm = new FormGroup({
      company_locations : new FormControl(),
      telephone_no : new FormControl(),
      unit_address : new FormControl(),
      company_breif : new FormControl(),
      awards_achievements : new FormControl(),
    })
  }

  doSubmit(){
    const formData = this.profileForm.value;

    console.log('Form Data',formData);
  }
}
