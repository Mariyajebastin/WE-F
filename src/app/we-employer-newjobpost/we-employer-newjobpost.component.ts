import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-we-employer-newjobpost',
  templateUrl: './we-employer-newjobpost.component.html',
  styleUrls: ['./we-employer-newjobpost.component.css']
})
export class WeEmployerNewjobpostComponent {
  public jobForm : FormGroup | any;

  constructor() {
    this.jobForm = new FormGroup({
      job_title : new FormControl(),
      job_location : new FormControl(),
      min_salary : new FormControl(),
      max_salary : new FormControl(),
      job_description : new FormControl(),
      company_profile : new FormControl()
    })
  }

  doPost(){
    const formData = this.jobForm.value;

    console.log("Form Data",formData);
  }
}
