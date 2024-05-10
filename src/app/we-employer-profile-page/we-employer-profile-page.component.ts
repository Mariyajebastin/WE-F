import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-profile-page',
  templateUrl: './we-employer-profile-page.component.html',
  styleUrls: ['./we-employer-profile-page.component.css']
})
export class WeEmployerProfilePageComponent implements OnInit {
  companyName = '';
  constructor(public router : Router) {
  }

  ngOnInit(): void {
    this.getCompanyName()
  }

  getCompanyName(){
    let storedData = localStorage.getItem('company')
    //@ts-ignore
    let d = JSON.parse(storedData);
    this.companyName = d;
  }
}
