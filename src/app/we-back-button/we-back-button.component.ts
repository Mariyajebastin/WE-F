import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-we-back-button',
  templateUrl: './we-back-button.component.html',
  styleUrls: ['./we-back-button.component.css']
})
export class WeBackButtonComponent {


  constructor(private location: Location){

  }

  goBack(){
    this.location.back()
  }

}
