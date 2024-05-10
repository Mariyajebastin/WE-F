import { Component,ViewChild, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {WebService} from "../web.service";
import {Router} from "@angular/router";
import { JobpostService } from "../jobpost.service";

@Component({
  selector: 'app-we-employer-newjobpost',
  templateUrl: './we-employer-newjobpost.component.html',
  styleUrls: ['./we-employer-newjobpost.component.css']
})
export class WeEmployerNewjobpostComponent implements OnInit{
  public jobForm : FormGroup | any;
  newPost = false;
  oldPost = true;
  searchText: string = '';
  previousSearchText = '';
  isSearchClicked = false;
  filtered_job_data : any[] = [];
  unfiltered_job_data : any[] = [];
  job_data : any;
  searchResultFound = true;
  public searchForm : FormGroup | any;
  noData = false;
  showData = false;
  postId : any;

  @ViewChild('dialog') dialog : any;

  constructor(private http:WebService, public router : Router,private formBuilder: FormBuilder, private jobDetails: JobpostService) {
    this.jobForm = new FormGroup({
      job_title : new FormControl('',Validators.required),
      job_location : new FormControl('',Validators.required),
      min_salary : new FormControl('5000',Validators.required),
      max_salary : new FormControl('10000',Validators.required),
      skills : new FormControl('',Validators.required),
      job_type : new FormControl('Full Time',Validators.required),
      salary_period : new FormControl('Per Month',Validators.required),
      responsibilities : new FormControl('',Validators.required),
      job_description : new FormControl('',Validators.required),
      company_profile : new FormControl()
    })
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    })
    console.log('searchText:',this.searchText)
  }

  showNewPost(){
    this.newPost = true;
    this.oldPost = false;
  }
  showOldPost(){
    this.newPost = false;
    this.oldPost = true;
    this.ngOnInit()
  }

  doPost(){
    if(this.jobForm.valid){
      const formData = this.jobForm.value;
    let companyId = localStorage.getItem('companyId');
    //@ts-ignore
    let id = JSON.parse(companyId)
    let serverData = {
      'job_title': formData.job_title,
      'job_description': formData.job_description,
      'min_salary': formData.min_salary,
      'max_salary': formData.max_salary,
      'skills': formData.skills,
      'job_type': formData.job_type,
      'salary_period': formData.salary_period,
      'responsibilities': formData.responsibilities,
      'company_profile': formData.company_profile,
      'job_location': formData.job_location,
      'created_by': id
    }
    this.http.postJobPost(serverData).subscribe(
      response => {
        var res = JSON.parse(JSON.stringify(response));
        console.log(res);
        if(res.status){
          this.postId = res.data;
          this.ngOnInit();
          console.log('from 82',this.postId);
          this.dialog.postedJobId = this.postId;
          console.log('from 85',this.dialog.postedJobId)
          this.dialog.showDialog = true;
          this.dialog.created = true;
          this.dialog.edited = false;
          this.jobForm.reset();
        }
      }, error => {
        console.log("error details ", error);
      }
    )
    }else{
      this.jobForm.markAllAsTouched()
    }
    
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
          this.filterData('')
          
          if (this.filtered_job_data && this.filtered_job_data.length > 0) {
            this.showData = true;
            this.noData = false;
          } else {
            this.showData = false;
            this.noData = true;
          }
        }else{
          if (this.filtered_job_data && this.filtered_job_data.length > 0) {
            this.showData = true;
            this.noData = false;
          } else {
            this.showData = false;
            this.noData = true;
          }
        }
      }
    )
  }

  filterData(searchText: string){
    this.filtered_job_data = this.unfiltered_job_data;
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
    this.filterData(this.searchForm.value.searchText);
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


  ngOnInit(): void {
    this.getJobpost();
  }



  viewJobDetails(job: any){
    this.jobDetails.setJobDetails(job)
    this.router.navigate(['/jobPost-details',job.id])
  }

}
