import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent{

  edited = false;
  created = false;
  showDialog = false;

  jobId : any;

  postedJobId : any;


  constructor(private router: Router){

  }

  close(){
    this.showDialog = false;
    this.router.navigate(['/newjob-post'])
  }

  editedJob(jobId: any){
    this.jobId = jobId;
    console.log('from 26',jobId)
    this.router.navigate(['/jobPost-details',jobId])
  }


  seePostedJob(){
    console.log('from 40',this.postedJobId)
    this.router.navigate(['/jobpost-details',this.postedJobId])
  }



}

