import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-edit-dropdown',
  templateUrl: './we-edit-dropdown.component.html',
  styleUrls: ['./we-edit-dropdown.component.css']
})
export class WeEditDropdownComponent {
    @Input() value : any;
}
