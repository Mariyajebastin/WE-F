import { Component } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  showToaster = false;
  title : String = ""
  message : String = ""
  viewing : any;
  value: String = "#00B412";
  isRed: boolean = false;
  // @ts-ignore
  toasterTimeout : ReturnType<typeof setTimeout>



  showToasterx() {
    if (this.showToaster) {
      clearTimeout(this.toasterTimeout);
      this.toasterTimeout = setTimeout(() => {
        this.showToaster = false;
      }, 3000);
      return;
    }
    this.showToaster = true;
    this.toasterTimeout = setTimeout(() => {
      this.showToaster = false; 
    }, 3000);
  }

  close(){
    this.showToaster = false;
  }



  
}
