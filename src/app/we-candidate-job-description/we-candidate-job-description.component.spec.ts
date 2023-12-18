import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCandidateJobDescriptionComponent } from './we-candidate-job-description.component';

describe('WeCandidateJobDescriptionComponent', () => {
  let component: WeCandidateJobDescriptionComponent;
  let fixture: ComponentFixture<WeCandidateJobDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeCandidateJobDescriptionComponent]
    });
    fixture = TestBed.createComponent(WeCandidateJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
