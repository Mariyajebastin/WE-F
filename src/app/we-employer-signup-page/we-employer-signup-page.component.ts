import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { WebService } from '../web.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-we-employer-signup-page',
  templateUrl: './we-employer-signup-page.component.html',
  styleUrls: ['./we-employer-signup-page.component.css']
})
export class WeEmployerSignupPageComponent implements OnInit{
  public signupForm : FormGroup | any;

  showSignup = true;
  showWelcome = false;
  fieldValue = 'password'
  verifyText = false;
  showOtp = false;
  wrongOtp = false;
  mobileNumber  = '';
  mobileEditIcon = false;
  mobileVerified = false;
  verifyBtn = true;
  showEmailOtp = false;
  invalidOtp = false;
  email : any;
  mailEditIcon = false;
  mailVerified = false;

  public otpForm : FormGroup | any;
  public emailOtpForm : FormGroup | any;

  @ViewChild('toaster') toaster: any;

  constructor(private http: WebService, public router: Router) {
    this.signupForm = new FormGroup({
      company_name : new FormControl('',[Validators.required]),
      pan_number : new FormControl('',[Validators.required]),
      industry_type : new FormControl('',[Validators.required]),
      email_id : new FormControl('',[Validators.required,Validators.email]),
      telephone_no : new FormControl('',[Validators.required,Validators.min(1000000000)]),
      address : new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      website_link : new FormControl('',[Validators.required])
    })

    this.otpForm = new FormGroup({
      otp1: new FormControl('',[Validators.required]),
      otp2: new FormControl('',[Validators.required]),
      otp3: new FormControl('',[Validators.required]),
      otp4: new FormControl('',[Validators.required])
    })

    this.emailOtpForm = new FormGroup({
      otp1 : new FormControl('',Validators.required),
      otp2 : new FormControl('',Validators.required),
      otp3 : new FormControl('',Validators.required),
      otp4 : new FormControl('',Validators.required)
    })
  }

  onFocucsField(fieldName : string){
    this.signupForm.get(fieldName).markAsUntouched()
  }


  editMobile(){
    this.signupForm.get('telephone_no').enable();
    this.showOtp = false;
    this.mobileEditIcon = false;
    this.wrongOtp = false;
    this.onInputChange()
    this.otpForm.reset()
  }

  editEmail(){
    this.signupForm.get('email_id').enable();
    this.showEmailOtp = false;
    this.mailEditIcon = false;
    this.invalidOtp = false;
    this.mailOnInputChange()
    this.emailOtpForm.reset();
  }


  mailOnInputChange() {
    this.verifyBtn = this.isEmailValid();
  }

  isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.email && emailPattern.test(this.email);
  }

  isMobileValid(): boolean {
    if (typeof this.mobileNumber === 'string') {
        return this.mobileNumber.length === 10;
    }
    return false;
  } 

  onInputChange() {
    this.verifyText = typeof this.mobileNumber === 'string' && this.mobileNumber.length === 10;
  }

  verifyEmail(){
    let mail = this.signupForm.get('email_id').value;
    let data = {
      'email': mail
    }
    this.http.employerGenerateOtp(data).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 97',res)
        if(res.status){
          this.signupForm.get('email_id').disable()
          this.mailEditIcon = true;
          this.showEmailOtp = true;
          this.verifyBtn = false;
          this.toaster.title = '! OTP';
          this.toaster.isRed = false;
          this.toaster.message = res.data;
          this.toaster.showToasterx();
        }else{
          this.toaster.title = '! Warning'
          this.toaster.message = res.message;
          this.toaster.isRed = true;
          this.toaster.showToasterx();
        }
      }
      
    )
    
  }

  verifyMobile(){
    const mobileControl = this.signupForm.get('telephone_no')
    mobileControl?.markAllAsTouched();
    let mobile_number = this.signupForm.get('telephone_no').value;
    let d = {
      'mobile_number': mobile_number
    }
    localStorage.setItem('employerNumber',JSON.stringify(mobile_number))
    this.http.employerSendOtp(d).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 69',res)
        if(res.status){
          this.mobileEditIcon = true;
          this.signupForm.get('telephone_no').disable()
          this.toaster.title = '! OTP';
          this.toaster.message = res.data;
          this.toaster.isRed = false;
          this.toaster.showToasterx();
          this.showOtp = true;
          this.verifyText = false;
        }else{
          this.toaster.title = '!Info';
          this.toaster.message = 'Telephone number already exists'
          this.toaster.showToasterx();
          this.toaster.isRed = true;
          this.verifyText = true;
        }
      }
      
    )
  }

  showPassword(){
    if(this.fieldValue == 'password'){
      this.fieldValue = 'text'
    }
    else{
      this.fieldValue = 'password'
    }
  }

  allowOnlyNumbers(event: KeyboardEvent){
    let input = event.key;
    let isDigit = /^\d$/;
    if(!isDigit.test(input)){
      event.preventDefault()
    }
  }

  doSubmit() {
    if(this.signupForm.valid){
      const isEmailVerified = localStorage.getItem('employerEmailVerified') === 'true';
      const isMobileVerified = localStorage.getItem('employerMobileVerified') === 'true';
      if(isEmailVerified && isMobileVerified){
        let formData = this.signupForm.value;
        let mail = this.signupForm.get('email_id').value;
        let telephone_no = this.signupForm.get('telephone_no').value;
        let serverData = {
          'email_id': mail,
          'telephone_no': telephone_no,
          'company_name': formData.company_name,
          'password': formData.password,
          'pan_number': formData.pan_number,
          'address': formData.address,
          'industry_type': formData.industry_type,
          'website_link': formData.website_link
        }
        console.log('from 192',serverData)
        this.http.signupEmployer(serverData).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          console.log('from 31',res)
          if(res.status){
            let companyName = this.signupForm.value.company_name;
            localStorage.setItem('company',JSON.stringify(companyName))
            let companyId = res.data;
            localStorage.setItem('companyId',JSON.stringify(companyId))
            let address = this.signupForm.value.address;
            localStorage.setItem('companyAddress',JSON.stringify(address))
            let link = this.signupForm.value.website_link;
            localStorage.setItem('companyLink',JSON.stringify(link))
            setTimeout(() =>{
              this.showSignup = false;
              this.showWelcome = true;
            },1000)        
            setTimeout(() =>{
              localStorage.setItem('employerToken','1')
              this.router.navigate(['/dashboard'])
            },3000)
            
          }
        }, error =>{

        }
      )
      }else{
        if(!isEmailVerified && !isMobileVerified){
          this.toaster.title = 'Verify Email and Mobile';
          this.toaster.message = 'Please verify your email and mobile number'
          this.toaster.isRed = true;
        }
        else if(!isEmailVerified){
          this.toaster.title = 'Verify Email';
          this.toaster.message = 'Please verify your email';
          this.toaster.isRed = true;
        }
        else{
          this.toaster.title = 'Verify Mobile';
          this.toaster.message = 'Please verify your mobile number';
          this.toaster.isRed = true;
        }

        this.toaster.showToasterx();
      }
      
    }
    else{
      this.signupForm.markAllAsTouched()
    }
  }

  ngOnInit(): void {
    localStorage.removeItem('employerEmailVerified')
    localStorage.removeItem('employerMobileVerified')
  }

  verifyOtp(){
    let otp = this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4
    let mobile_number = this.signupForm.get('telephone_no').value;
    let serverData = {
      'otp': otp,
      'mobile_number': mobile_number
    }
    console.log('from 154',serverData)
    this.http.employerVerifyOtp(serverData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 158',res)
        if(res.status){
          this.toaster.title = '! Info';
          this.toaster.message = 'Telephone verified successfully';
          this.toaster.showToasterx();
          this.showOtp = false;
          localStorage.setItem('employerMobileVerified','true')
          this.signupForm.get('telephone_no').disable()
          this.mobileEditIcon = false;
          this.mobileVerified = true;
          this.wrongOtp = false;
        }else{
          this.mobileVerified = false;
          this.wrongOtp = true;
        }
      }
    )
  }

  verifyEmailOtp(){
    let mail = this.signupForm.get('email_id').value;
    let otp = this.emailOtpForm.value.otp1+this.emailOtpForm.value.otp2+this.emailOtpForm.value.otp3+this.emailOtpForm.value.otp4
    let d = {
      'mobile_number': mail,
      'otp': otp
    }
    this.http.employerVerifyOtp(d).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 240',res)
        if(res.status){
          this.toaster.title = '! Info';
          this.toaster.message = 'Email verified successfully';
          this.toaster.showToasterx();
          localStorage.setItem('employerEmailVerified','true')
          this.showEmailOtp = false;
          this.mailEditIcon = false;
          this.mailVerified = true;
          this.invalidOtp = false;
        }else{
          this.invalidOtp = true;
        }
      }
    )
  }



  @ViewChild('Otp1') Otp1!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp2') Otp2!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp3') Otp3!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp4') Otp4!: ElementRef<HTMLInputElement>;


  onInputE(event: any,currentInput: HTMLInputElement,nextInput: HTMLInputElement | undefined){
    const inputValue = event.target.value;
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');
  
    currentInput.value = numericInputValue;
  
    if (nextInput && inputValue.trim() !== '') {
      this.setFocus(nextInput);
    }

    this.checkAndVerify()
  }


  onKeyDownE(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput: HTMLInputElement | undefined) {
    if (event.code === 'Backspace' && !currentInput.value) {
      this.goToPreviousInputE(currentInput);
      event.preventDefault();
    }
  }

  goToPreviousInputE(currentInput: HTMLInputElement) {
      const previousInput = this.getPreviousInputE(currentInput);
      if (previousInput) {
          this.setFocus(previousInput);
      }
  }




  checkAndVerify(){
    const otpInputs = [this.Otp1, this.Otp2, this.Otp3, this.Otp4];
    // @ts-ignore
    const allOtpFieldsFilled = otpInputs.every(input => input.nativeElement.value.trim() !== '');
    if (allOtpFieldsFilled) {
      this.verifyEmailOtp();
    }
  }


  private getPreviousInputE(currentInput: HTMLInputElement): HTMLInputElement | null {
    switch (currentInput) {
      case this.Otp4?.nativeElement:
        return this.Otp3?.nativeElement || null;
      case this.Otp3?.nativeElement:
        return this.Otp2?.nativeElement || null;
      case this.Otp2?.nativeElement:
        return this.Otp1?.nativeElement || null;
      default:
        return null;
    }
  }




  @ViewChild('otp1') otp1!: ElementRef;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;


  onInput(event: any, currentInput: HTMLInputElement, nextInput: HTMLInputElement | undefined) {
    const inputValue = event.target.value;
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');
  
    currentInput.value = numericInputValue;
  
    if (nextInput && inputValue.trim() !== '') {
      this.setFocus(nextInput);
    }
  
    this.checkAndSubmit();
  }
  
  onKeyDown(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput: HTMLInputElement | undefined) {
    if (event.code === 'Backspace') {
      if (previousInput && !currentInput.value) {
        this.setFocus(previousInput);
      }
    }
  }
  
  

  goToPreviousInput(currentInput: HTMLInputElement) {
      const previousInput = this.getPreviousInput(currentInput);
      if (previousInput) {
          this.setFocus(previousInput);
      }
  }



  checkAndSubmit(){
    const otpInputs = [this.otp1, this.otp2, this.otp3, this.otp4];
    // @ts-ignore
    const allOtpFieldsFilled = otpInputs.every(input => input.nativeElement.value.trim() !== '');
    if (allOtpFieldsFilled) {
      this.verifyOtp();
    }
  }

  setFocus(inputField: HTMLInputElement) {
    inputField.focus();
  }

  private getPreviousInput(currentInput: HTMLInputElement): HTMLInputElement | null {
    switch (currentInput) {
      case this.otp4?.nativeElement:
        return this.otp3?.nativeElement || null;
      case this.otp3?.nativeElement:
        return this.otp2?.nativeElement || null;
      case this.otp2?.nativeElement:
        return this.otp1?.nativeElement || null;
      default:
        return null;
    }
  }

}
