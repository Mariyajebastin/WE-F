import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-textarea',
  templateUrl: './we-textarea.component.html',
  styleUrls: ['./we-textarea.component.css']
})
export class WeTextareaComponent {

    @Input () value : any;
    @Input() placeholder_value : any;
}
