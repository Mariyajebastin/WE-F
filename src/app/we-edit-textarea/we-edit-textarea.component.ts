import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-we-edit-textarea',
  templateUrl: './we-edit-textarea.component.html',
  styleUrls: ['./we-edit-textarea.component.css']
})
export class WeEditTextareaComponent {
    @Input() value :any;
    @Input() placeholder_value : any;
    @Input() control : FormControl | any;
}
