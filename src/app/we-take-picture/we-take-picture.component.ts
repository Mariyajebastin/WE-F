import { Component } from '@angular/core';

@Component({
  selector: 'app-we-take-picture',
  templateUrl: './we-take-picture.component.html',
  styleUrls: ['./we-take-picture.component.css']
})
export class WeTakePictureComponent {
  selectFile : any;

  onFileUpload(event : any){
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    else {
      this.selectFile = null;
    }
  }
}
