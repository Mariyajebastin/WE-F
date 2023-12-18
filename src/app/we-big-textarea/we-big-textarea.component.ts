import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-big-textarea',
  templateUrl: './we-big-textarea.component.html',
  styleUrls: ['./we-big-textarea.component.css']
})
export class WeBigTextareaComponent {
    @Input() value : any;
    @Input() placeholder_value : any;
}
