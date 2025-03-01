import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerDetailsService {
  public httpOptions : any;
  public token : any;
  public isAuthendicated : boolean

  constructor(private http: HttpClient) { 
    this.isAuthendicated = true;
    
    this.httpOptions = {
      header :new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  setToken(employerToken: any){
    this.token = employerToken;
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
    if(localStorage.getItem('employerToken') !=null){
      return true;
    }
    else{
      return false;
    }
  }

}
