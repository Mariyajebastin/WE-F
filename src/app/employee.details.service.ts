import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  public httpOptions : any;
  public token : any;
  public isAuthendicated : boolean


  constructor(private http: HttpClient) { 
    this.isAuthendicated = true;
    this.httpOptions = {
      header :new HttpHeaders({'Content-Type': 'application/json'})
    };
  }


  setToken(employeeToken: any){
    this.token = employeeToken;
    this.isAuthendicated = true;
  }

  getToken(){
    return this.token;
  }

  removeToken(){
    this.token = "";
    this.isAuthendicated = false;
    localStorage.clear()
  }

  isLoggedIn(){
    if(localStorage.getItem('employeeToken') !=null){
      return true;
    }
    else{
      return false;
    }
  }
  



}
