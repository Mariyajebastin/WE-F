import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class WebService {

  serverIp = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

  }

  postEmployer(data: any) {
    return this.http.post(this.serverIp + "/employer/", data)
  }

  postJobPost(data: any) {
    return this.http.post(this.serverIp + "/employer/jobpost", data)
  }

  postEmployee(data: any) {
    return this.http.post(this.serverIp + "/employee/", data)
  }

  // postSignUp(data: any) {
  //   return this.http.post(this.serverIp + "/employee/", data)
  // }
}
