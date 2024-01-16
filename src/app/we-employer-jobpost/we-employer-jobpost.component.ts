
import {Router} from "@angular/router";
import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebService} from "../web.service";
@Component({
  selector: 'app-we-employer-jobpost',
  templateUrl: './we-employer-jobpost.component.html',
  styleUrls: ['./we-employer-jobpost.component.css']
})

export class WeEmployerJobpostComponent {
  public jobPostForm: FormGroup | any;

  constructor(private http: WebService, public router : Router) {
    this.jobPostForm = new FormGroup({
      jobname: new FormControl(),
      location: new FormControl(),
      date: new FormControl(),
      created_by: new FormControl(),
      purpose: new FormControl()
    })
  }

  doSubmit() {
    const formData = this.jobPostForm.value;
    console.log("form Data", formData);
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






