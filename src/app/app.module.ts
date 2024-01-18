import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { WeTextfieldComponent } from './we-textfield/we-textfield.component';
import { WeDropdownComponent } from './we-dropdown/we-dropdown.component';
import { WeTextareaComponent } from './we-textarea/we-textarea.component';
import { WeEmployerComponent } from './we-employer/we-employer.component';
import { WeButtonComponent } from './we-button/we-button.component';
import { WeCandidateComponent } from './we-candidate/we-candidate.component';
import { WeJobpostComponent } from './we-jobpost/we-jobpost.component';
import { WeHeaderComponent } from './we-header/we-header.component';
import { WeIndexPageComponent } from './we-index-page/we-index-page.component';
import { WeFooterComponent } from './we-footer/we-footer.component';
import { WeLoginPageComponent } from './we-login-page/we-login-page.component';
import { WePasswordFieldComponent } from './we-password-field/we-password-field.component';
import { WeSignupPageComponent } from './we-signup-page/we-signup-page.component';
import { WeWelcomePageComponent } from './we-welcome-page/we-welcome-page.component';
import { WeProfileComponent } from './we-profile/we-profile.component';
import { WeProfileDetailsComponent } from './we-profile-details/we-profile-details.component';
import { WeCandidateJobSearchComponent } from './we-candidate-job-search/we-candidate-job-search.component';
import { WeCandidateJobDescriptionComponent } from './we-candidate-job-description/we-candidate-job-description.component';
import { WeCandidateJobAppliedComponent } from './we-candidate-job-applied/we-candidate-job-applied.component';
import { WeEditTextfieldComponent } from './we-edit-textfield/we-edit-textfield.component';
import { WeCandidateJobStatusComponent } from './we-candidate-job-status/we-candidate-job-status.component';
import { WeEmployerLoginPageComponent } from './we-employer-login-page/we-employer-login-page.component';
import { WeEmployerSignupPageComponent } from './we-employer-signup-page/we-employer-signup-page.component';
import { WeEmployerWelcomePageComponent } from './we-employer-welcome-page/we-employer-welcome-page.component';
import { WeEmployerProfilePageComponent } from './we-employer-profile-page/we-employer-profile-page.component';
import { WeEmployerProfileDetailsComponent } from './we-employer-profile-details/we-employer-profile-details.component';
import { WeEditDropdownComponent } from './we-edit-dropdown/we-edit-dropdown.component';
import { WeEditTextareaComponent } from './we-edit-textarea/we-edit-textarea.component';
import { WeBigTextareaComponent } from './we-big-textarea/we-big-textarea.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { WeEmployerNewjobpostComponent } from './we-employer-newjobpost/we-employer-newjobpost.component';
import { WeEmployerJobpostComponent } from './we-employer-jobpost/we-employer-jobpost.component';
import { WeEmployerJobcreatedComponent } from './we-employer-jobcreated/we-employer-jobcreated.component';
import { WeEmployerCreatedjobsComponent } from './we-employer-createdjobs/we-employer-createdjobs.component';
import { WeEmployerCandidateAppliedComponent } from './we-employer-candidate-applied/we-employer-candidate-applied.component';
import { WeEmployerAnalyticsComponent } from './we-employer-analytics/we-employer-analytics.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { WeEmployerJobpostDetailsComponent } from './we-employer-jobpost-details/we-employer-jobpost-details.component';
import { WeVerificationPageComponent } from './we-verification-page/we-verification-page.component';
import { WeVerifyingPageComponent } from './we-verifying-page/we-verifying-page.component';
import { WeTakePictureComponent } from './we-take-picture/we-take-picture.component';
import { NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";


const routes : Routes =[
  {path:'',component:WeIndexPageComponent},
  // Candidate portal
  {path:'login',component:WeLoginPageComponent},
  {path:'verify',component:WeVerificationPageComponent},
  {path:'verifying',component:WeVerifyingPageComponent},
  {path:'signup',component:WeSignupPageComponent},
  {path:'take-picture',component:WeTakePictureComponent},
  {path:'welcome',component:WeWelcomePageComponent},
  {path:'applied-jobs',component:WeCandidateJobAppliedComponent},
  {path:'job-description',component:WeCandidateJobDescriptionComponent},
  {path:'job-search',component:WeCandidateJobSearchComponent},
  {path:'profile',component:WeProfileComponent},
  {path:'job-status',component:WeCandidateJobStatusComponent},

  // Employer portal
  {path: 'employer',component:WeEmployerLoginPageComponent},
  {path:'employer-signup',component:WeEmployerSignupPageComponent},
  {path:'register-success',component:WeEmployerWelcomePageComponent},
  {path:'dashboard',component:WeEmployerProfilePageComponent},
  {path:'employer-profile',component:WeEmployerProfileDetailsComponent},
  {path:'newjob-post',component:WeEmployerNewjobpostComponent},
  {path:'employer-jobpost',component:WeEmployerJobpostComponent},
  {path:'jobPost-details',component:WeEmployerJobpostDetailsComponent},
  {path:'job-created',component:WeEmployerJobcreatedComponent},
  {path:'created-jobs',component:WeEmployerCreatedjobsComponent},
  {path:'employer-candidate-applied',component:WeEmployerCandidateAppliedComponent},
  {path:'employer-analytics',component:WeEmployerAnalyticsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    WeTextfieldComponent,
    WeDropdownComponent,
    WeTextareaComponent,
    WeEmployerComponent,
    WeButtonComponent,
    WeCandidateComponent,
    WeJobpostComponent,
    WeHeaderComponent,
    WeIndexPageComponent,
    WeFooterComponent,
    WeLoginPageComponent,
    WePasswordFieldComponent,
    WeSignupPageComponent,
    WeWelcomePageComponent,
    WeProfileComponent,
    WeProfileDetailsComponent,
    WeCandidateJobSearchComponent,
    WeCandidateJobDescriptionComponent,
    WeCandidateJobAppliedComponent,
    WeEditTextfieldComponent,
    WeCandidateJobStatusComponent,
    WeEmployerLoginPageComponent,
    WeEmployerSignupPageComponent,
    WeEmployerWelcomePageComponent,
    WeEmployerProfilePageComponent,
    WeEmployerProfileDetailsComponent,
    WeEditDropdownComponent,
    WeEditTextareaComponent,
    WeBigTextareaComponent,
    WeEmployerNewjobpostComponent,
    WeEmployerJobpostComponent,
    WeEmployerJobcreatedComponent,
    WeEmployerCreatedjobsComponent,
    WeEmployerCandidateAppliedComponent,
    WeEmployerAnalyticsComponent,
    WeEmployerJobpostDetailsComponent,
    WeVerificationPageComponent,
    WeVerifyingPageComponent,
    WeTakePictureComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
