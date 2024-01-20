import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-we-profile',
  templateUrl: './we-profile.component.html',
  styleUrls: ['./we-profile.component.css']
})
export class WeProfileComponent{
  selectFile : any;

  onFileUpload(event : any){
    const file = event.target.files[0];
    if (file){
      const reader = new FileReader();
      reader.onload = (e: any) =>{
        this.selectFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    else{
      this.selectFile = null;
    }
  }
}
