import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
      company_locations : new FormControl('',Validators.required),
      telephone_no : new FormControl(),
      unit_address : new FormControl(),
      company_breif : new FormControl(),
      awards_achievements : new FormControl(),
    })
  }
}
