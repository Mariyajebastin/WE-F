import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-dropdown',
  templateUrl: './we-dropdown.component.html',
  styleUrls: ['./we-dropdown.component.css']
})
export class WeDropdownComponent {
    @Input () name : any;
}
