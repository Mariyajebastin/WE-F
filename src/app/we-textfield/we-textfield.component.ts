import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-we-textfield',
  templateUrl: './we-textfield.component.html',
  styleUrls: ['./we-textfield.component.css']
})
export class WeTextfieldComponent {
    @Input () name :any;
    @Input () placeholder_value : any;
    @Input() control : FormControl | any;
}
