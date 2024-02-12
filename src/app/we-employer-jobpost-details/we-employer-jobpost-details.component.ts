import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-we-employer-jobpost-details',
  templateUrl: './we-employer-jobpost-details.component.html',
  styleUrls: ['./we-employer-jobpost-details.component.css']
})
export class WeEmployerJobpostDetailsComponent {
  constructor(public router : Router) {
  }

  @ViewChild('btns',{static : true}) btns! : ElementRef;
  @ViewChild('menu',{static: true}) menu! : ElementRef;

  openMenu(){
    if(this.btns && this.btns.nativeElement){
      const x = this.btns.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }

  doMenu(){
    if(this.menu && this.menu.nativeElement){
      const x = this.menu.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }
}
