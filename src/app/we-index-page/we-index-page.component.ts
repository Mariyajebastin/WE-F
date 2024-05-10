import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-we-index-page',
  templateUrl: './we-index-page.component.html',
  styleUrls: ['./we-index-page.component.css']
})
export class WeIndexPageComponent implements OnInit{

  public searchForm : FormGroup | any;
  latitude : any;
  longitude : any;
  locationValue: any;

  constructor(){
    this.searchForm = new FormGroup({
      location : new FormControl('')
    })
  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        position =>{
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log('latitude', this.latitude)
          console.log('longitude',this.longitude)
          this.locationValue = this.latitude , this.longitude;
        }
      )
    }
  }

  location(){
    this.searchForm.controls['location'].setValue(this.locationValue)

  }

 ngOnInit() {
   this.getLocation()
 }
}
