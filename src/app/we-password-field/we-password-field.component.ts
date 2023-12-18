import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-password-field',
  templateUrl: './we-password-field.component.html',
  styleUrls: ['./we-password-field.component.css']
})
export class WePasswordFieldComponent {
    @Input () value : any;
}
