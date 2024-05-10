import {Component,OnInit, ElementRef, QueryList, ViewChildren, HostListener,ViewChild,AfterViewInit} from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';
import { JobpostService } from '../jobpost.service';

@Component({
  selector: 'app-we-candidate-job-search',
  templateUrl: './we-candidate-job-search.component.html',
  styleUrls: ['./we-candidate-job-search.component.css']
})
export class WeCandidateJobSearchComponent implements OnInit,AfterViewInit{

  full_time_job_data : any;
  contract_job_data : any;
  part_time_job_data : any;
  internship_job_data : any;
  isLeftScrollVisible = true;
  isRightScrollVisible = true;
  scrollLeft = 0;
  cIsLeftscrollBtn = true;
  cIsRightscrollBtn = true;
  pIsLeftscrollBtn = true;
  pIsRightscrollBtn = true;
  iIsRightscrollBtn = true;
  iIsLeftscrollBtn = true;
  @ViewChildren('boxContainer') boxContainers! : QueryList<ElementRef>;
  @ViewChildren('boxContainers') contractBoxContainers! : QueryList<ElementRef>;
  @ViewChildren('pBoxContainer') partBoxContainers! : QueryList<ElementRef>;
  @ViewChildren('iBoxContainer') internBoxContainers! : QueryList<ElementRef>;

  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef<HTMLDivElement>;

  constructor(private http: WebService, private router: Router, private jobDetails : JobpostService){

  }


  viewJob(job: any){
    this.jobDetails.setJobDetails(job)
    console.log('from 40',job)
    this.router.navigate(['/job-description',job.id])
  }


  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollLeft = (event.target as HTMLDivElement).scrollLeft;
    this.checkButtonVisibility();
    this.contractCheckButtonVisibility();
    this.partCheckButtonVisibility();
    this.internCheckButtonVisibility();
  }




  ngAfterViewInit(): void {
    this.checkButtonVisibility();
    this.contractCheckButtonVisibility();
    this.partCheckButtonVisibility();
    this.internCheckButtonVisibility();
  }


  @HostListener('window:resize')
  onResize(): void {
    this.checkButtonVisibility();
    this.contractCheckButtonVisibility();
    this.partCheckButtonVisibility();
    this.internCheckButtonVisibility();
  }

  

  checkButtonVisibility(): void {
    const container: HTMLDivElement = this.boxContainers.first.nativeElement;
    const isOverflowing = container.scrollWidth > container.clientWidth;
  
    this.isLeftScrollVisible = container.scrollLeft > 0;
    this.isRightScrollVisible = isOverflowing && (container.scrollWidth > container.clientWidth + container.scrollLeft);
  }
  
  
  

  doScroll(direction: number): void {
    const container: HTMLDivElement | undefined = this.boxContainers.first?.nativeElement;
  
    if (!container) {
      console.error("Container not found.");
      return;
    }
    const scrollAmount = 220;
    const newScrollLeft = container.scrollLeft + direction * scrollAmount;
  
    container.scrollLeft = newScrollLeft;
    this.checkButtonVisibility();
  }
  
  
  
  contractCheckButtonVisibility(){
    const container: HTMLDivElement = this.contractBoxContainers.first.nativeElement;
    const isOverflowing = container.scrollWidth > container.clientWidth;
  
    this.cIsLeftscrollBtn = container.scrollLeft > 0;
    this.cIsRightscrollBtn = isOverflowing && (container.scrollWidth > container.clientWidth + container.scrollLeft);
  }


  cDoScroll(direction: number): void {
    const container: HTMLDivElement | undefined = this.contractBoxContainers.first?.nativeElement;
  
    if (!container) {
      console.error("Container not found.");
      return;
    }
    const scrollAmount = 220;
    const newScrollLeft = container.scrollLeft + direction * scrollAmount;
  
    container.scrollLeft = newScrollLeft;
    this.contractCheckButtonVisibility();
  }


  partCheckButtonVisibility(){
    const container: HTMLDivElement = this.partBoxContainers.first.nativeElement;
    const isOverflowing = container.scrollWidth > container.clientWidth;
  
    this.pIsLeftscrollBtn = container.scrollLeft > 0;
    this.pIsRightscrollBtn = isOverflowing && (container.scrollWidth > container.clientWidth + container.scrollLeft);
  }


  pDoScroll(direction: number): void {
    const container: HTMLDivElement | undefined = this.partBoxContainers.first?.nativeElement;
  
    if (!container) {
      console.error("Container not found.");
      return;
    }
    const scrollAmount = 220;
    const newScrollLeft = container.scrollLeft + direction * scrollAmount;
  
    container.scrollLeft = newScrollLeft;
    this.partCheckButtonVisibility();
  }


  internCheckButtonVisibility(){
    const container: HTMLDivElement = this.internBoxContainers.first.nativeElement;
    const isOverflowing = container.scrollWidth > container.clientWidth;
  
    this.iIsLeftscrollBtn = container.scrollLeft > 0;
    this.iIsRightscrollBtn = isOverflowing && (container.scrollWidth > container.clientWidth + container.scrollLeft);
  }


  iDoScroll(direction: number): void {
    const container: HTMLDivElement | undefined = this.internBoxContainers.first?.nativeElement;
  
    if (!container) {
      console.error("Container not found.");
      return;
    }
    const scrollAmount = 220;
    const newScrollLeft = container.scrollLeft + direction * scrollAmount;
  
    container.scrollLeft = newScrollLeft;
    this.internCheckButtonVisibility()
  }

  getFulltimeJobs(){
    let job_type = 'Full Time';
    this.http.getJob(job_type).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 31',res);
        if(res.status){
          this.full_time_job_data = res.data;
        }
      }
    )
  }

  getContractJobs(){
    let job_type = 'Contract';
    this.http.getJob(job_type).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 45',res)
        if(res.status){
          this.contract_job_data = res.data;

        }
      }
    )
  }

  getPartTimeJobs(){
    let job_type = 'Part Time';
    this.http.getJob(job_type).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        if(res.status){
          this.part_time_job_data = res.data;
        }
      }
    )
  }

  getInternshipJobs(){
    let job_type = 'Internship';
    this.http.getJob(job_type).subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        if(res.status){
          this.internship_job_data = res.data;
        }
      }
    )
  }

  ngOnInit(): void {
    this.getFulltimeJobs();
    this.getContractJobs();
    this.getPartTimeJobs();
    this.getInternshipJobs();
    setTimeout(() => this.checkButtonVisibility(), 100);
    setTimeout(() => this.contractCheckButtonVisibility(), 100);
    setTimeout(() => this.partCheckButtonVisibility(), 100);
    setTimeout(() => this.internCheckButtonVisibility(), 100);
  }
}
