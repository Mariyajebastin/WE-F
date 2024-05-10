import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Router, ActivatedRoute } from "@angular/router";
import { JobpostService } from '../jobpost.service';
import { WebService } from '../web.service';

@Component({
  selector: 'app-we-candidate-job-description',
  templateUrl: './we-candidate-job-description.component.html',
  styleUrls: ['./we-candidate-job-description.component.css']
})
export class WeCandidateJobDescriptionComponent implements OnInit{

  job_data : any;
  constructor(public router : Router, private route: ActivatedRoute, private http: WebService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        const jobIdParam = params.get('id');
        this.fetchJobDetails(jobIdParam)
      });
    }, 10); 
  }


  fetchJobDetails(jobId: any){
    const storedJobDetails = localStorage.getItem('jobDetails_' + jobId);
    this.http.getJobDetails(jobId).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 50',res)
        this.job_data = res.data[0];
        console.log('from 34',this.job_data)
      }
    )
  }

}
