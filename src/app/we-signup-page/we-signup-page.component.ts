import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-we-signup-page',
  templateUrl: './we-signup-page.component.html',
  styleUrls: ['./we-signup-page.component.css']
})
export class WeSignupPageComponent {
  public signupForm : FormGroup | any;
  selectFile : any;

  constructor() {
    this.signupForm = new FormGroup({
      nick_name : new FormControl('',Validators.required),
      mobile_no : new FormControl('',Validators.required),
      resume : new FormControl('',)
    })

  }

  doSignup() {
    const formData = this.signupForm.value;

    console.log('Form Data',formData);
  }

  onFileUpload(event : any){
    const file = event.target.files[0];

    if (file){
      const reader = new FileReader();
      reader.onload = (e: any) =>{
        this.selectFile = e.target.result;
      };

      reader.readAsDataURL(file);
    }
    else{
      this.selectFile = null;
    }
  }
}
