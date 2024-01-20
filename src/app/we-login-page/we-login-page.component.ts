import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor() {
    this.loginForm = new FormGroup({
      mobile_no : new FormControl('',Validators.required),
    })
  }

  doLogin() {
    const formData = this.loginForm.value;

    console.log('Form Data',formData);
  }
  ngOnInit() {
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

    const formData = this.loginForm.value;
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
