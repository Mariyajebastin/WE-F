import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-jobpost-details',
  templateUrl: './we-employer-jobpost-details.component.html',
  styleUrls: ['./we-employer-jobpost-details.component.css']
})
export class WeEmployerJobpostDetailsComponent {
  constructor(public router : Router) {
  }
}
