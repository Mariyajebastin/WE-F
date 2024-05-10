import { Component,OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../web.service';

@Component({
  selector: 'app-employer-profile-details',
  templateUrl: './employer-profile-details.component.html',
  styleUrls: ['./employer-profile-details.component.css']
})
export class EmployerProfileDetailsComponent implements OnInit{

  public profileForm : FormGroup | any;
  saveBtn = false;
  editBtn = true;
  employer_data : any;
  companyName : any;
  editingCompanyName = false;

  @ViewChild('toaster') toaster : any;

  constructor(private http: WebService){
    this.profileForm = new FormGroup({
      id : new FormControl(''),
      company_name : new FormControl('',Validators.required),
      industry_type : new FormControl('',Validators.required),
      telephone_no : new FormControl('',Validators.required),
      email_id : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      no_of_employees : new FormControl('',Validators.required),
      pan_number : new FormControl('',Validators.required),
      awards_and_achievements : new FormControl('',Validators.required)
    })

  }


  editCompanyName(){
    this.editingCompanyName = true;
  }

  saveCompanyName(){
    this.doEdit();
    this.editingCompanyName = false;
  }

  doEdit(){
    let storedData = localStorage.getItem('companyId');
    //@ts-ignore
    let id = JSON.parse(storedData)
    this.profileForm.value.id = id;
    console.log('from 40',this.profileForm.value.id)
    let formData = this.profileForm.value;
    this.http.updateEmployerProfile(formData).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        if(res.status){
          // this.saveBtn = false;
          // this.editBtn = true;
          // this.toaster.title = '! Info';
          // this.toaster.message = 'Data updated successfully';
          // this.toaster.isRes = false;
          // this.toaster.showToasterx();
          this.ngOnInit();
        }
      }
    )
  }

  getEmployerDetails(){
    let storedData = localStorage.getItem('companyId');
    //@ts-ignore
    let id = JSON.parse(storedData)
    console.log('from 31',id)
    this.http.getEmployerDetails(id).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 35',res)
        if(res.status){
          this.employer_data = res.data[0];
          console.log('from 40',this.employer_data)

          this.profileForm.patchValue({
            company_name : this.employer_data.company_name,
            pan_number : this.employer_data.pan_number,
            email_id : this.employer_data.email_id,
            industry_type: this.employer_data.industry_type,
            no_of_employees: this.employer_data.no_of_employees,
            telephone_no: this.employer_data.telephone_no,
            address: this.employer_data.address,
            awards_and_achievements: this.employer_data.awards_and_achievements
          })
        }
      }
    )
  }

  allowOnlyNumbers(event: KeyboardEvent){
    let input = event.key
    let isDigit = /^\d$/;
    if(!isDigit.test(input)){
      event.preventDefault();
    }
  }


  ngOnInit(): void {
    this.getEmployerDetails();
  }

}
