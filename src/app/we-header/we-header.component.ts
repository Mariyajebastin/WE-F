import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeDetailsService } from '../employee.details.service';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';


@Component({
  selector: 'app-we-header',
  templateUrl: './we-header.component.html',
  styleUrls: ['./we-header.component.css'],
})
export class WeHeaderComponent implements OnInit, OnDestroy{

  headerMenu = true;
  candidateMenu = false;
  employerMenu = false;
  nickName : any;
  showLoginButton = true;
  isLoggedIn = false;
  private refreshSubscription: Subscription | any;

  constructor(private employee: EmployeeDetailsService,private event: EventService, public router: Router, private route: ActivatedRoute) {

    this.getNickname();

    this.route.url.subscribe((segments) => {
      const url = segments.join('/');
      this.showLoginButton = url === '/login' || url === '';

      if(url === '/'){
        this.headerMenu = false;
        this.candidateMenu = false;
        this.employerMenu = false;
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.url;
        if (url === '/') {
          this.headerMenu = false;
          this.candidateMenu = false;
          this.employerMenu = false;
        }
      });


  }
  openMenu() {
    this.candidateMenu = !this.candidateMenu
  }

  openMenuBar(){
    this.employerMenu = !this.employerMenu;
  }


  isEmployeeAuthenticated() {
    return localStorage.getItem('employeeToken') !== null;
  }
  
  isEmployerAuthenticated() {
    return localStorage.getItem('employerToken') !== null;
  }
  
  



  doNavigate(pageName: any){
    if(pageName == 'logout'){
      this.employee.removeToken();
      this.router.navigate(['/login'])
      this.candidateMenu = false;
      return;
    }
    if(localStorage.getItem('employeeToken')!=null){
      this.router.navigate([pageName])
      this.candidateMenu = false;
      return;
    }

  }

  navigate(pageName: any){
    if(pageName === 'logout'){
      this.employee.removeToken();
      this.router.navigate(['/employer']);
      this.employerMenu = false;
      return;
    }
    if(localStorage.getItem('employerToken') !== null){
      this.router.navigate([pageName]);
      this.employerMenu = false;
      return;
    }
  }
  
  ngOnInit(): void {
    this.getNickname();
    this.refreshSubscription = this.event.getRefreshObservable().subscribe(() => {
      this.getNickname();
    })
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }


  getNickname(){
    if(localStorage.getItem('nickName') != null){
      let storedData = localStorage.getItem('nickName')
    //@ts-ignore
    let d = JSON.parse(storedData)
    this.nickName = d;
    }
    else{
      this.nickName = ''
    }
    
  }

    
}
