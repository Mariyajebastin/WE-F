import {Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-we-signup-page',
  templateUrl: './we-signup-page.component.html',
  styleUrls: ['./we-signup-page.component.css']
})
export class WeSignupPageComponent implements OnInit{
  public signupForm : FormGroup | any;
  @Input() startTimer: boolean = false;
  remainingSeconds: number = 0;
  timerSubscription: any;
  seconds = 0;
  showOtp = false;
  showEmailOtp = false;
  public otpForm : FormGroup | any;
  invalidOtp = false;
  wrongOtp = false;
  mailEditIcon = false;
  mobileEditIcon = false;
  public emailOtpForm : FormGroup | any;
  ShowSignup = true;
  showWelcome = false;
  verifyText = false;
  verifyBtn = true;
  mobileNumber  = '';
  mobileVerified = false;
  mailVerified = false;
  email : any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  file: any;

  @ViewChild('toaster') toaster : any;

  constructor(private http : WebService, public router: Router,private event: EventService) {
    this.signupForm = new FormGroup({
      nick_name : new FormControl('',Validators.required),
      mobile_number : new FormControl('',[Validators.required, Validators.min(1000000000)]),
      field_of_interest : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      country_code : new FormControl({value: '+91', disabled: true}),
      designation : new FormControl(''),
      education : new FormControl(''),
      department : new FormControl(''),
      skills : new FormControl(''),
      experience: new FormControl(''),
      resume : new FormControl('')
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

  getFile(event: any){
    this.file = event.target.files[0]
  }

  onInputChange() {
    this.verifyText = typeof this.mobileNumber === 'string' && this.mobileNumber.length === 10;
  }

  isMobileValid(): boolean {
    if (typeof this.mobileNumber === 'string') {
        return this.mobileNumber.length === 10;
    }
    return false;
  } 


  onFocucsField(fieldName : string){
    this.signupForm.get(fieldName).markAsUntouched()
  }


  mailOnInputChange() {
    this.verifyBtn = this.isEmailValid();

  }

  isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.email && emailPattern.test(this.email);
  }


  verifyEmail(): void {
    
    const emailControl = this.signupForm.get('email');
  
    emailControl?.markAsTouched();
    let mail = this.signupForm.get('email').value
    let d = {
      'mobile_number': mail
    }
    localStorage.setItem('mail',JSON.stringify(mail))
    this.http.generateOtp(d).subscribe(
      response =>{
        let serverRes = JSON.parse(JSON.stringify(response));
        console.log('from 68',serverRes)
        if(serverRes.status){
          this.verifyBtn = false;
          this.mailEditIcon = true;
          this.signupForm.get('email').disable()
          this.showEmailOtp = true;
          this.toaster.title = '! OTP';
          this.toaster.message = serverRes.data;
          this.toaster.isRed = false;
          this.toaster.showToasterx();
        }
        else{
          this.toaster.title = '! Warning';
          this.toaster.message = serverRes.message;
          this.toaster.isRed = true;
          this.toaster.showToasterx();
        }
      }
    )
  }

  editEmail(){
    this.signupForm.get('email').enable()
    this.showEmailOtp = false;
    this.mailEditIcon = false;
    this.invalidOtp = false;
    this.mailOnInputChange()
    this.emailOtpForm.reset()
  }

  verifyMobile(){
    const mobileControl = this.signupForm.get('mobile_number')
    mobileControl?.markAllAsTouched();
    
    let mobile_number = this.signupForm.get('mobile_number').value;
    let d = {
      'mobile_number': mobile_number
    }
    localStorage.setItem('number',JSON.stringify(mobile_number))
    this.http.sendOtp(d).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 43',res)
        if(res.status){
          this.verifyText = false;
          this.mobileEditIcon = true;
          this.signupForm.get('mobile_number').disable()
          this.showOtp = true;
          this.showOtp = true;
          this.toaster.title = '! OTP';
          this.toaster.message = res.data;
          this.toaster.isRed = false;
          this.toaster.showToasterx();
        }else{
          this.toaster.title = '! Warning';
          this.toaster.message = res.message;
          this.toaster.isRed = true;
          this.toaster.showToasterx();
        }
      }
    )
  }

  editMobile(){
    this.signupForm.get('mobile_number').enable()
    this.showOtp = false;
    this.mobileEditIcon = false;
    this.wrongOtp = false;
    this.onInputChange()
    this.otpForm.reset()
  }
  

  verifyEmailOtp(){
    let otp = this.emailOtpForm.value.otp1+this.emailOtpForm.value.otp2+this.emailOtpForm.value.otp3+this.emailOtpForm.value.otp4
    console.log('mail otp',otp)
    let data = localStorage.getItem('mail')
    //@ts-ignore
    let d = JSON.parse(data)
    let serverData = {
      'otp': otp,
      'mobile_number': d
    }
    this.http.verifyOtp(serverData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 135',res);
        if(res.status){
          this.toaster.title = '! Info';
          this.toaster.message = 'Email verifed'
          this.toaster.showToasterx();
          this.showEmailOtp = false;
          this.mailEditIcon = false;
          this.invalidOtp = false;
          localStorage.setItem('emailVerified','true')
          this.verifyBtn = false;
          this.mailVerified = true;
        }else{
          this.invalidOtp = true;
          this.mailVerified = false;
        }
      }
    )
  }

  ngOnInit(): void {
    localStorage.removeItem('emailVerified');
    localStorage.removeItem('mobileVerified');  
    this.dropdownList = [
      { skill_id : 1, skill : 'python' },
      { skill_id : 2, skill : 'java' },
      { skill_id : 3, skill : 'C++' },
      { skill_id : 4, skill : 'javascript' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill_id',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 2,
      allowSearchFilter: true,
      maxHeight: 80
    };
  }

  onItemSelect(skill: any){
    console.log(skill)
  }

  onSelectAll(skill: any){

  }
  

  doSignup() {
    if(this.signupForm.valid){  
      const isEmailVerified = localStorage.getItem('emailVerified') === 'true';
      const isMobileVerified = localStorage.getItem('mobileVerified') === 'true';

      if(isEmailVerified && isMobileVerified){
        let formData = this.signupForm.value;
        let mailData = localStorage.getItem('mail')
        //@ts-ignore
        let m = JSON.parse(mailData)
        let numberData = localStorage.getItem('number')
        //@ts-ignore
        let n = JSON.parse(numberData)
        let data = new FormData()
        data.append('nick_name',formData.nick_name)
        data.append('field_of_interest',formData.field_of_interest)
        data.append('mobile_number',n)
        data.append('email',m)
        data.append('department',formData.department)
        data.append('education',formData.education)
        data.append('experience',formData.experience)
        data.append('designation',formData.designation)
        data.append('skills',formData.skills)
        if(this.file){
          data.append('resume',this.file)
        }
        localStorage.setItem('nickName',JSON.stringify(formData.nick_name))
         this.http.signup(data).subscribe(
          response =>{
            let res = JSON.parse(JSON.stringify(response));
            console.log('from 194',res)
            if(res.status){
              let employee_id = res.data;
              localStorage.setItem('employeeId',JSON.stringify(employee_id))
              setTimeout(() =>{
                this.ShowSignup = false;
                this.showWelcome = true;
              },1000)
              
              setTimeout(() => {
                this.router.navigate(['/job-search'])
                localStorage.setItem('employeeToken', 'Token')
              }, 3000);
              this.event.refreshHeader();
            }
          }
         )
      }
      else{
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

    } else{
      this.signupForm.markAllAsTouched()
    }
    
  }

  verifyOtp(){
    let otp = this.otpForm.value.otp1+this.otpForm.value.otp2+this.otpForm.value.otp3+this.otpForm.value.otp4
    let storedData = localStorage.getItem('number')
    //@ts-ignore
    let data = JSON.parse(storedData)
    console.log('from 123',data)
    let serverData = {
      'otp': otp,
      'mobile_number': data
    }
    console.log('from 128',serverData)
    this.http.verifyOtp(serverData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 85', res)
        if(res.status){
          this.toaster.title = '! Info';
          this.toaster.message = 'Mobile number verified';
          this.toaster.showToasterx();
          this.showOtp = false;
          this.mobileEditIcon = false;
          this.wrongOtp = false;
          localStorage.setItem('mobileVerified','true')
          this.verifyText = false;
          this.mobileVerified = true;
        }else{
          this.wrongOtp = true;
          this.mobileVerified = false;
        }
      }
    )
  }

  allowOnlyNumbers(event: KeyboardEvent){
    let input = event.key;
    let isDigit = /^\d$/;
    if(!isDigit.test(input)){
      event.preventDefault()
    }
  }


  @ViewChild('Otp1') Otp1!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp2') Otp2!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp3') Otp3!: ElementRef<HTMLInputElement>;
  @ViewChild('Otp4') Otp4!: ElementRef<HTMLInputElement>;


  onInputE(event: any,currentInput: HTMLInputElement,nextInput: HTMLInputElement | undefined){
    const inputValue = event.target.value;
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');

    event.target.value = numericInputValue;

    if (numericInputValue && nextInput) {
      this.setFocus(nextInput);
    }

    if (event.inputType === 'deleteContentBackward' && inputValue === '') {
      const previousInput = this.getPreviousInputE(currentInput);
      if (previousInput) {
        this.setFocus(previousInput);
      }
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
    const inputValue = currentInput.value;
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');

    currentInput.value = numericInputValue;

    if (numericInputValue && nextInput) {
      this.setFocus(nextInput);
    }

    if (event.inputType === 'deleteContentBackward') {
      // If the backspace key is pressed, move the focus to the previous input
      const previousInput = this.getPreviousInput(currentInput);
      if (previousInput) {
        this.setFocus(previousInput);
      }
    }

    this.checkAndSubmit();
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
