import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-we-employer-candidate-applied',
  templateUrl: './we-employer-candidate-applied.component.html',
  styleUrls: ['./we-employer-candidate-applied.component.css']
})
export class WeEmployerCandidateAppliedComponent implements OnInit{

  candidate_data: any;
  

  constructor(private http: WebService){

  }

  getCandidateDetails(){
    this.http.getCandidate().subscribe(
      response =>{
        let res = JSON.parse(JSON.stringify(response));
        console.log('from 21',res)
        if(res.status){
          this.candidate_data = res.data;
          console.log('from 24',this.candidate_data)
        }
      }
    )
  }

  ngOnInit(): void {
    this.getCandidateDetails()
  } 

}
