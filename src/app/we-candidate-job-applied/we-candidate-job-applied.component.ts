import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-we-candidate-job-applied',
  templateUrl: './we-candidate-job-applied.component.html',
  styleUrls: ['./we-candidate-job-applied.component.css'],
})
export class WeCandidateJobAppliedComponent {

  activeButton : string = 'Jobs Applied';
  showJobsAppliedContainer: boolean = true;
  showSavedJobsContainer : boolean = false;

  constructor(public router: Router) {

  }
  setActiveButton(button: string){
    if(button === 'Jobs Applied') {
      this.showJobsAppliedContainer = true;
      this.showSavedJobsContainer = false;
    }
    else {
      this.showJobsAppliedContainer = false;
      this.showSavedJobsContainer = true;
    }
    this.activeButton = button;
  }

}
