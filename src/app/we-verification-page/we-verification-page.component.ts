import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-we-verification-page',
  templateUrl: './we-verification-page.component.html',
  styleUrls: ['./we-verification-page.component.css']
})
export class WeVerificationPageComponent {
  selectFile : any;

  constructor(public router : Router) {
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
