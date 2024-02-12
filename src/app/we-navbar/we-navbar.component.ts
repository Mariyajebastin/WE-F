import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-navbar',
  templateUrl: './we-navbar.component.html',
  styleUrls: ['./we-navbar.component.css']
})
export class WeNavbarComponent {
  activeButton : string = '';

  constructor(public router : Router) {
  }

  setActiveButton(button : string){
    this.activeButton = button;

    switch (button){
      case 'Dashboard':
        this.router.navigate(['/dashboard']);
        break;

      case 'CreateNewJob':
        this.router.navigate(['/newjob-post']);
        break;

      case 'Candidates':
        this.router.navigate(['/candidates']);
        break;
    }
  }
}
