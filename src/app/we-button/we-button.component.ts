import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-button',
  templateUrl: './we-button.component.html',
  styleUrls: ['./we-button.component.css']
})
export class WeButtonComponent {
  @Input() value : any;
}
