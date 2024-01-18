import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-welcome-page',
  templateUrl: './we-welcome-page.component.html',
  styleUrls: ['./we-welcome-page.component.css']
})
export class WeWelcomePageComponent {
  constructor(public router: Router) {
  }
}
