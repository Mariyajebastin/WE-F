import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-we-header',
  templateUrl: './we-header.component.html',
  styleUrls: ['./we-header.component.css'],
})
export class WeHeaderComponent {
  @ViewChild('profileMenu', { static: true }) profileMenu!: ElementRef;
  @ViewChild('menuBar', { static: true }) menuBar!: ElementRef;
  constructor() {

  }
  openMenu() {
    if (this.profileMenu && this.profileMenu.nativeElement) {
      const x = this.profileMenu.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }

  openMenuBar(){
    if (this.menuBar && this.menuBar.nativeElement) {
      const x = this.menuBar.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }
}
