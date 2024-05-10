import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-welcome-page',
  templateUrl: './we-welcome-page.component.html',
  styleUrls: ['./we-welcome-page.component.css']
})
export class WeWelcomePageComponent implements OnInit{
  nickName = ''

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.getNickname()
  }

  getNickname(){
    let storedData = localStorage.getItem('nickName')
    //@ts-ignore
    let name = JSON.parse(storedData)
    this.nickName = name;
  }
}
