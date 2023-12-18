import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-edit-textfield',
  templateUrl: './we-edit-textfield.component.html',
  styleUrls: ['./we-edit-textfield.component.css']
})
export class WeEditTextfieldComponent {

  @Input () name :any;
  @Input () placeholder_value : any;
}
