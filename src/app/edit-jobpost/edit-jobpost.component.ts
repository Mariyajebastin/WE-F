import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-edit-jobpost',
  templateUrl: './edit-jobpost.component.html',
  styleUrls: ['./edit-jobpost.component.css']
})
export class EditJobpostComponent {

  public jobForm : FormGroup | any;

  @ViewChild('dialog') dialog : any;


  constructor(private route: ActivatedRoute, private http: WebService ){
    this.jobForm = new FormGroup({
      id : new FormControl(),
      job_title : new FormControl('',Validators.required),
      job_location : new FormControl('',Validators.required),
      job_type : new FormControl('',Validators.required),
      job_description : new FormControl('',Validators.required),
      min_salary : new FormControl('',Validators.required),
      max_salary : new FormControl('',Validators.required),
      salary_period : new FormControl('',Validators.required),
      skills : new FormControl('',Validators.required),
      responsibilities : new FormControl('',Validators.required),
      company_profile : new FormControl(''),
    })
  }


  doEdit(){
    if(this.jobForm.valid){
      let formData = this.jobForm.value;
      this.http.editJobPost(formData).subscribe(
        response =>{
          let res = JSON.parse(JSON.stringify(response));
          console.log('from 38',res)
          if(res.status){
            this.dialog.showDialog = true;
            this.dialog.edited = true;
            this.dialog.created = false;
          }
        }
      )
    }
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const jobId = params.get('id');
      if (jobId) {
        this.http.getJobDetails(jobId).subscribe(response => {
          let res = JSON.parse(JSON.stringify(response));
          let data = res.data[0];
          this.populateForm(data,jobId);
          this.dialog.jobId = jobId;
        });
      }
    });
  }
  
  populateForm(jobDetails: any,jobId: any) {
    this.jobForm.patchValue({
      job_title: jobDetails.job_title,
      job_location: jobDetails.job_location,
      job_type : jobDetails.job_type,
      job_description : jobDetails.job_description,
      min_salary: jobDetails.min_salary,
      max_salary: jobDetails.max_salary,
      salary_period: jobDetails.salary_period,
      skills: jobDetails.skills,
      responsibilities: jobDetails.responsibilities,
      company_profile: jobDetails.company_profile,
      id: jobId
    });
  }  

}
