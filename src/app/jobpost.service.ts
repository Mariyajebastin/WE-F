import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobpostService {

  private jobDetails = new BehaviorSubject<any>(null);
  currentJobDetails = this.jobDetails.asObservable();

  constructor() { }

  setJobDetails(job: any){
    this.jobDetails.next(job);
  }


}
