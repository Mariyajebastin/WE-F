
import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import {WebService} from "../web.service";
import { JobpostService } from "../jobpost.service";
@Component({
  selector: 'app-we-employer-jobpost',
  templateUrl: './we-employer-jobpost.component.html',
  styleUrls: ['./we-employer-jobpost.component.css']
})

export class WeEmployerJobpostComponent implements OnInit{
  searchText = '';
  previousSearchText = '';
  isSearchClicked = false;
  filtered_job_data : any[] = [];
  unfiltered_job_data : any[] = [];
  job_data : any;
  searchResultFound = true;
  noData = false;
  showData = false

  constructor(private http: WebService, public router : Router, private jobDetails: JobpostService) {
   
  }

  ngOnInit(): void {
    this.getJobpost();
  }


  getJobpost(){
    let storedData = localStorage.getItem('companyId')
    //@ts-ignore
    let id = JSON.parse(storedData)
    this.http.getJobpost(id).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 30',res)
        if(res.status){
          this.job_data = res.data;
          this.unfiltered_job_data = this.job_data || [];
          console.log('from 41',this.unfiltered_job_data)
          this.filterData('')

          if (this.filtered_job_data && this.filtered_job_data.length > 0) {
            this.noData = false;
            this.showData = true;
          } else {
            this.showData = false;
            this.noData = true;
          }
        }else{
          if (this.filtered_job_data && this.filtered_job_data.length > 0) {
            this.noData = false;
            this.showData = true;
          } else {
            this.showData = false;
            this.noData = true;
          }
        }
      },error =>{
        console.log('from 45',error)
      }
      
    )
    
  }

  viewJobDetails(job: any){
    this.jobDetails.setJobDetails(job)
    this.router.navigate(['/jobPost-details',job.id])
  }

  filterData(searchText: string){
    this.filtered_job_data = this.unfiltered_job_data;
    console.log('from 57',this.filtered_job_data)
    this.searchResultFound = true;
    if(this.isSearchClicked){
      if(searchText !== ''){
        this.filtered_job_data = this.unfiltered_job_data.filter((job: any)=> {
          return job.job_title.toLowerCase().includes(searchText.toLowerCase())
        });
        this.searchResultFound = this.filtered_job_data.length > 0;
      }else{
        this.filtered_job_data = this.unfiltered_job_data;
        this.searchResultFound = true;
      }
    }
  }

  onSearchButtonClick(){
    this.isSearchClicked = true;
    this.filterData(this.searchText);
    this.previousSearchText = this.searchText;
  }

  onSearchInput(){
    if(!this.isSearchClicked && this.searchText === ''){
      this.filterData(this.searchText)
    }else{
      this.isSearchClicked = false;
    }
  }

  onSearchKeydown(event: KeyboardEvent){
    if(event.key === 'Backspace'){
      this.searchText = ''
      this.filterData('')
    }
  }

}






