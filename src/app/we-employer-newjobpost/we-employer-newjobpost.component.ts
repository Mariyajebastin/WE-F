import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WebService} from "../web.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-newjobpost',
  templateUrl: './we-employer-newjobpost.component.html',
  styleUrls: ['./we-employer-newjobpost.component.css']
})
export class WeEmployerNewjobpostComponent {
  public jobForm : FormGroup | any;

  constructor(private http:WebService, public router : Router) {
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

    console.log("form Data",formData);
    this.http.postJobPost(formData).subscribe(
      response => {
        var res = JSON.parse(JSON.stringify(response));
        console.log(res);


      }, error => {
        console.log("error details ", error);
      }
    )
  }
}
