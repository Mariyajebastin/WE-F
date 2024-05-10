import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { WebService } from '../web.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-we-login-page',
  templateUrl: './we-login-page.component.html',
  styleUrls: ['./we-login-page.component.css']
})
export class WeLoginPageComponent {
  public loginForm : FormGroup | any;
  @Input() startTimer: boolean = false;
  remainingSeconds: number = 0;
  timerSubscription: any;
  seconds = 0;
  showOtp = false;
  wrongText = false;
  editIcon = false;
  public otpForm : FormGroup | any;
  submitBtn = true;
  wrongOtp = false;
  showEmail = false;
  showLogin = true;
  mailEditIcon = false;
  eSubmitBtn = false;
  public mailForm : FormGroup | any;
  mailText = false;
  mobileText = false;
  mailOtp = false;
  mobileOtp = false;
  mobileNumber : any;
  showMobileNumber = false;

  @ViewChild('toaster') toaster : any;

  constructor(private http: WebService, public router: Router, private event: EventService) {
    this.loginForm = new FormGroup({
      mobile_number : new FormControl('',Validators.required),
    })
    this.otpForm = new FormGroup({
      otp1 : new FormControl('',Validators.required),
      otp2 : new FormControl('',Validators.required),
      otp3 : new FormControl('',Validators.required),
      otp4 : new FormControl('',Validators.required)
    })
    this.mailForm = new FormGroup({
      email_id : new FormControl('',[Validators.required,Validators.email])
    })
  }



  showEmailVerification(){
    this.showLogin = false;
    this.showEmail = true;
    this.submitBtn = false;
    this.eSubmitBtn = true;
  }

  editMail(){
    this.mailForm.get('email_id').enable();
    this.mailEditIcon = false;
    this.showOtp = false;
    this.eSubmitBtn = true;
  }

  sendEmailOtp(){
    if(this.mailForm.valid){
      let mail = this.mailForm.value;
      this.http.emailSentOtp(mail).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          console.log('from 66',res)
          if(res.status){
            this.mobileOtp = false;
            this.mailOtp = true;
            this.showOtp = true;
            this.eSubmitBtn = false;
            this.mailText = true;
            this.mobileText = false;
            this.mailForm.get('email_id').disable();
            this.mailEditIcon = true;
            this.toaster.title = "! Info";
            this.toaster.message = res.data;
            this.toaster.isRed = false;
            this.toaster.showToasterx();
          }else{
            this.toaster.title = "! Warning";
            this.toaster.message = res.message;
            this.toaster.isRed = true;
            this.toaster.showToasterx();
          }
        }
      )
    }else{
      this.mailForm.markAllAsTouched();
    }
  }


  resendMailOtp(){
    this.otpForm.reset();
      this.wrongOtp = false;
      let data = this.mailForm.value;
      this.http.emailSentOtp(data).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          if(res.status){
            this.submitBtn = false;
            this.showOtp = true;
            this.toaster.title = '! OTP';
            this.toaster.message = res.data;
            this.toaster.isRed = false;
            this.toaster.showToasterx();
            this.mailEditIcon = true;
            this.mailForm.get('email_id').disable()
          }else{
            this.toaster.title = '! Warning';
            this.toaster.message = 'Given mail id is not registered';
            this.toaster.isRed = true;
            this.toaster.showToasterx();
          }
        }, error =>{
          console.error(error)
        }
      )
  }

  verifyMailOtp(){
    let otp = this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4
    let mail = this.mailForm.value.email_id;
    console.log('from 132',mail)
    let d = {
      'otp': otp,
      'email_id': mail
    }
    this.http.verifyMailOtp(d).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 139',res)
        if(res.status){
          this.toaster.title = '! Info'
          this.toaster.message = 'Email verified';
          this.toaster.isRed = false;
          this.toaster.showToasterx();
          this.mobileNumber = res.data.mobile_number;
          this.showMobileNumber = true;
          this.showEmail = false;
          this.otpForm.reset();
          this.showOtp = false;
        }else{
          this.toaster.title = '! Warning'
          this.toaster.message = res.message;
          this.toaster.isRed = true;
          this.toaster.showToasterx();
        }
      }
    ) 
  }

  go(){
    this.router.navigate(['/job-search'])
  }

  loginShow(){
    this.showLogin = true;
    this.showMobileNumber = false;
  }

  sendOtp(){
    if(this.loginForm.valid){
      this.otpForm.reset();
      this.wrongOtp = false;
      let data = this.loginForm.value;
      this.http.loginOtp(data).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          if(res.status){
            this.submitBtn = false;
            this.mobileText = true;
            this.mailText = false;
            this.mobileOtp = true;
            this.mailOtp = false;
            this.showOtp = true;
            this.toaster.title = '! OTP';
            this.toaster.message = res.data;
            this.toaster.isRed = false;
            this.toaster.showToasterx();
            this.editIcon = true;
            this.loginForm.get('mobile_number').disable()
          }else{
            this.toaster.title = '! Warning';
            this.toaster.message = 'Given number is not registered';
            this.toaster.isRed = true;
            this.toaster.showToasterx();
          }
        }, error =>{
          console.error(error)
        }
      )
    }
    else{
      this.loginForm.markAllAsTouched()
    }
    
  }

  resendOtp(){
    this.otpForm.reset();
      this.wrongOtp = false;
      let data = this.loginForm.value;
      this.http.loginOtp(data).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          if(res.status){
            this.submitBtn = false;
            this.showOtp = true;
            this.toaster.title = '! OTP';
            this.toaster.message = res.data;
            this.toaster.isRed = false;
            this.toaster.showToasterx();
            this.editIcon = true;
            this.loginForm.get('mobile_number').disable()
          }else{
            this.toaster.title = '! Warning';
            this.toaster.message = 'Given number is not registered';
            this.toaster.isRed = true;
            this.toaster.showToasterx();
          }
        }, error =>{
          console.error(error)
        }
      )
  }

  onFocucsField(fieldName : string){
    this.loginForm.get(fieldName).markAsUntouched();
  }

  allowOnlyNumbers(event: KeyboardEvent){
    let input = event.key;
    let isDigit = /^\d$/;
    if(!isDigit.test(input)){
      event.preventDefault()
    }
  }

  editNumber(){
    this.loginForm.get('mobile_number').enable()
    this.showOtp = false;
    this.submitBtn = true;
    this.editIcon = false;
  }

  ngOnInit() {
    this.setFocus(this.otp1.nativeElement);
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

    this.checkAndSubmit()
  }

  onKeyDown(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput: HTMLInputElement | undefined) {
    if (event.code === 'Backspace' && !currentInput.value) {
      this.goToPreviousInput(currentInput);
      event.preventDefault();
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
    if (allOtpFieldsFilled && this.mobileText) {
      this.verifyOtp();
    }else if(allOtpFieldsFilled && this.mailText){
      this.verifyMailOtp()
    }
  }

  verifyOtp(){
    let otp = this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4
    let mobile_number = this.loginForm.value.mobile_number;
    let d = {
      'otp': otp,
      'mobile_number': mobile_number
    }
    this.http.loginVerifyOtp(d).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 124',res)
        if(res.status){
          let nickName = res.data.employee_name;
          let employee_id = res.data.employee_id;
          localStorage.setItem('employeeId',JSON.stringify(employee_id))
          localStorage.setItem('nickName',JSON.stringify(nickName))
          this.wrongOtp = false;
          this.router.navigate(['/job-search'])
          localStorage.setItem('employeeToken', 'Token')
          this.event.refreshHeader();
        }else{
          this.wrongOtp = true;
        }
      }
    )
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
