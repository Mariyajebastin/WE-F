import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class WebService {

  //serverIp = "http://127.0.0.1:8000";
  serverIp = 'https://web.uuksoftwares.in'

  constructor(private http: HttpClient) {

  }



  postEmployer(data: any) {
    return this.http.post(this.serverIp + "/employer/employer", data)
  }
  
  loginEmployer(data: any){
    return this.http.post(this.serverIp + '/employer/login',data)
  }

  signupEmployer(data: any){
    return this.http.post(this.serverIp+'/employer/signup',data)
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

  sendOtp(data: any) {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post(this.serverIp + "/employee/sendOtp", data,{headers})
  }

  verifyOtp(data: any){
    return this.http.post(this.serverIp+'/employee/verify',data)
  }


  generateOtp(data: any){
    return this.http.post(this.serverIp + '/employee/generateOtp',data)
  }

  loginVerifyOtp(data: any){
    return this.http.post(this.serverIp+'/employee/login-verify',data)
  }

  signup(data: any){
    return this.http.post(this.serverIp+'/employee/signup',data)
  }

  loginOtp(data: any){
    return this.http.post(this.serverIp+'/employee/loginOtp',data)
  }

  employerSendOtp(data: any){
    return this.http.post(this.serverIp + '/employer/sendOtp',data)
  }

  employerVerifyOtp(data: any){
    return this.http.post(this.serverIp+'/employer/verifyOtp',data)
  }

  employerGenerateOtp(data: any){
    return this.http.post(this.serverIp+'/employer/generateOtp',data)
  }

  getEmployee(data: any){
    return this.http.get(this.serverIp+'/employee/signup/'+data)
  }

  getJobpost(data: any){
    return this.http.get(this.serverIp+'/employer/jobpost/'+data)
  }


  getJobDetails(data: any){
    return this.http.get(this.serverIp+'/employer/jobDetails/'+data)
  }

  editJobPost(data: any){
    return this.http.put(this.serverIp+'/employer/jobpost',data)
  }

  getCandidate(){
    return this.http.get(this.serverIp+'/employee/employees')
  }

  updateEmployerProfile(data: any){
    return this.http.put(this.serverIp+'/employer/employer',data)
  }

  getEmployerDetails(data: any){
    return this.http.get(this.serverIp+'/employer/employer/'+data)
  }

  getJob(data: any){
    return this.http.get(this.serverIp+'/employer/get-jobpost/'+data)
  }

  updateEmployeeProfile(data: any){
    return this.http.put(this.serverIp+'/employee/signup',data)
  }

  emailSentOtp(data: any){
    return this.http.post(this.serverIp+'/employee/mail-otp',data)
  }

  verifyMailOtp(data: any){
    return this.http.post(this.serverIp+'/employee/mail-verify-otp',data)
  }

}
