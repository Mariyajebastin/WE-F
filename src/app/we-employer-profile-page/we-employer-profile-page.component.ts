import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-profile-page',
  templateUrl: './we-employer-profile-page.component.html',
  styleUrls: ['./we-employer-profile-page.component.css']
})
export class WeEmployerProfilePageComponent {
  constructor(public router : Router) {
  }
}
