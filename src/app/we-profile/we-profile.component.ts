import {Component, OnInit} from '@angular/core';
import { WebService } from '../web.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-we-profile',
  templateUrl: './we-profile.component.html',
  styleUrls: ['./we-profile.component.css']
})
export class WeProfileComponent implements OnInit{
  selectFile : any;
  employee_data : any;
  public profileForm : FormGroup | any;
  file : any;
  saveBtn = false;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  constructor(private http: WebService){
    this.profileForm = new FormGroup({
      id : new FormControl(''),
      nick_name : new FormControl(''),
      mobile_number : new FormControl(''),
      designation : new FormControl(''),
      experience : new FormControl(''),
      department : new FormControl(''),
      education : new FormControl(''),
      resume : new FormControl('')
    })

  }


  onItemSelect(skill: any){
    console.log(skill)
  }

  onSelectAll(skill: any){

  }

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

  ngOnInit(): void {
    this.getEmployeeDetails();
    this.dropdownList = [
      { skill_id : 1, skill : 'python' },
      { skill_id : 2, skill : 'java' },
      { skill_id : 3, skill : 'C++' },
      { skill_id : 4, skill : 'javascript' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill_id',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 2,
      allowSearchFilter: true,
      maxHeight: 80
    };
  }

  doEdit(){
    this.profileForm.enable();
    this.saveBtn = true;
  }

  getEmployeeDetails(){
    let storedData = localStorage.getItem('employeeId');
    //@ts-ignore
    let id = JSON.parse(storedData)
    this.http.getEmployee(id).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response))
        if(res.status){
          this.employee_data = res.data[0];

          this.profileForm.patchValue({
            nick_name: this.employee_data.nick_name,
            mobile_number: this.employee_data.mobile_number,
            designation: this.employee_data.designation,
            experience: this.employee_data.experience,
            department: this.employee_data.department,
            education: this.employee_data.education,
            resume: this.employee_data.resume
          });
        }
      }
    )
  }

  doSave(){
    let formData = this.profileForm.value;
   
    let storedData = localStorage.getItem('employeeId')
    //@ts-ignore
    let d = JSON.parse(storedData)
    this.profileForm.value.id = d;
    console.log('from 83',this.profileForm.value.id)
    console.log('from 115',formData)
    this.http.updateEmployeeProfile(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 81',res)
        if(res.status){
          this.ngOnInit();
        }
      }
    )
  }


  getFile(event: any){
    this.file = event.target.files[0];
  }

}
