import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WebService} from "../web.service";

@Component({
  selector: 'app-we-signup-page',
  templateUrl: './we-signup-page.component.html',
  styleUrls: ['./we-signup-page.component.css']
})
export class WeSignupPageComponent {
  public signupForm : FormGroup | any;
  @Input() startTimer: boolean = false;
  remainingSeconds: number = 0;
  timerSubscription: any;
  seconds = 0;

  constructor(private http : WebService) {
    this.signupForm = new FormGroup({
      nick_name : new FormControl('',Validators.required),
      mobile_no : new FormControl('',Validators.required),
      profile_image : new FormControl('',Validators.required),
    })
  }

  doSignup() {
    const formData = this.signupForm.value;

    console.log("form Data",formData);
    this.http.postEmployee(formData).subscribe(
      response => {
        var res = JSON.parse(JSON.stringify(response));
        console.log(res);


      }, error => {
        console.log("error details ", error);
      }
    )
  }

  startTimerFunction() {
    this.seconds = 59; // Set initial value
    this.timerSubscription = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        // Timer reached 0, you can handle this event if needed
        clearInterval(this.timerSubscription);
      }
    }, 1000);
    const formData = this.signupForm.value;
    console.log('Form Data',formData);
  }

  @ViewChild('otp1') otp1!: ElementRef;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;

  ngAfterViewInit() {
    this.setFocus(this.otp1.nativeElement);
  }

  onInput(event: any, currentInput: HTMLInputElement, nextInput: HTMLInputElement | undefined) {
    const inputValue = event.target.value;

    // Filter out non-numeric characters
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue !== numericInputValue) {
      // If non-numeric characters were removed, update the input value
      event.target.value = numericInputValue;
    }
    if (numericInputValue) {
      if (nextInput) {
        this.setFocus(nextInput);
      }
    } else {
      // If backspace is pressed and the current input is empty, move focus to the previous input
      const previousInput = this.getPreviousInput(currentInput);
      if (previousInput) {
        this.setFocus(previousInput);
      }
    }
  }

  setFocus(inputField: HTMLInputElement) {
    inputField.focus();
  }

  private getPreviousInput(currentInput: HTMLInputElement): HTMLInputElement | null {
    switch (currentInput) {
      case this.otp4.nativeElement:
        return this.otp3.nativeElement;
      case this.otp3.nativeElement:
        return this.otp2.nativeElement;
      case this.otp2.nativeElement:
        return this.otp1.nativeElement;
      default:
        return null;
    }
  }
}
