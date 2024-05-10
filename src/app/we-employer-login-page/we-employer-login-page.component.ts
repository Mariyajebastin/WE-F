import { Component,ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-login-page',
  templateUrl: './we-employer-login-page.component.html',
  styleUrls: ['./we-employer-login-page.component.css']
})
export class WeEmployerLoginPageComponent {
  public loginForm : FormGroup | any;
  fieldValue = 'password'

  @ViewChild('toaster') toaster : any;

  constructor(private http : WebService,public router: Router) {
    this.loginForm = new FormGroup({
      email_id : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }


  showPassword(){
    if(this.fieldValue == 'password'){
      this.fieldValue = 'text';
    }else{
      this.fieldValue = 'password'
    }
  }

  onFocucsField(fieldName : string){
    this.loginForm.get(fieldName).markAsUntouched()
  }

  doLogin(){
    if(this.loginForm.valid){
      console.log('working')
      const formData = this.loginForm.value;
      console.log('Form Data',formData);
      this.http.loginEmployer(this.loginForm.value).subscribe(
        response =>{
          var res = JSON.parse(JSON.stringify(response))
          console.log(res);
          if(res.status){
            let comapanyName = res.data.company_name;
            localStorage.setItem('company',JSON.stringify(comapanyName))
            let companyId = res.data.id;
            localStorage.setItem('companyId',JSON.stringify(companyId))
            let companyAddress = res.data.address;
            localStorage.setItem('companyAddress',JSON.stringify(companyAddress))
            let link = res.data.link;
            localStorage.setItem('companyLink',JSON.stringify(link))
            this.loginForm.reset()
            this.router.navigate(['/dashboard'])
            localStorage.setItem('employerToken','1')
          }else{
            this.toaster.title = '! Warning';
            this.toaster.message = res.message
            this.toaster.showToasterx();
            this.toaster.isRed = true;
          } if(res.status_code === 404){
            this.toaster.title = '! Warning';
            this.toaster.message = "Enter a valid email"
            this.toaster.showToasterx();
            this.toaster.isRed = true;
          }
        }
      )
    }
    else{
      this.loginForm.markAllAsTouched()
      console.log('not working')
    }

  }
}
