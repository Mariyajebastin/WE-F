import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Router, ActivatedRoute } from "@angular/router";
import { JobpostService } from '../jobpost.service';
import { WebService } from '../web.service';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-we-employer-jobpost-details',
  templateUrl: './we-employer-jobpost-details.component.html',
  styleUrls: ['./we-employer-jobpost-details.component.css']
})
export class WeEmployerJobpostDetailsComponent implements OnInit {

  jobDetails : any;

  companyName : any;
  companyAddress : any;
  companyLink : any;

  constructor(public router : Router, private route: ActivatedRoute, private job: JobpostService, private http: WebService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        const jobIdParam = params.get('id');
        console.log('from 27', jobIdParam)
        this.fetchJobDetails(jobIdParam)
      });
    }, 10); 
    let storedData = localStorage.getItem('company');
    //@ts-ignore
    let name = JSON.parse(storedData);
    this.companyName = name;
    let data = localStorage.getItem('companyAddress');
    //@ts-ignore
    let address = JSON.parse(data)
    this.companyAddress = address;
    let d = localStorage.getItem('companyLink');
    //@ts-ignore
    let link = JSON.parse(d)
    this.companyLink = link;
  }

  fetchJobDetails(jobId: any): void {
    const storedJobDetails = localStorage.getItem('jobDetails_' + jobId);
    this.http.getJobDetails(jobId).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 50',res)
        this.jobDetails = res.data[0];
      }
    )
    // if (storedJobDetails) {
    //   this.jobDetails = JSON.parse(storedJobDetails);
    // } else {
    //   console.error('Job details not found in local storage for job ID:', jobId);
    // }

  }

  editJob(jobId: any){
    this.router.navigate(['/edit-job',jobId])
  }
  



  @ViewChild('btns',{static : true}) btns! : ElementRef;
  @ViewChild('menu',{static: true}) menu! : ElementRef;

  openMenu(){
    if(this.btns && this.btns.nativeElement){
      const x = this.btns.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }

  doMenu(){
    if(this.menu && this.menu.nativeElement){
      const x = this.menu.nativeElement as HTMLDivElement;
      x.style.display = x.style.display === 'block' ? 'none' : 'block';
    }
  }
}
