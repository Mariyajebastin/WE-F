import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCandidateJobStatusComponent } from './we-candidate-job-status.component';

describe('WeCandidateJobStatusComponent', () => {
  let component: WeCandidateJobStatusComponent;
  let fixture: ComponentFixture<WeCandidateJobStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeCandidateJobStatusComponent]
    });
    fixture = TestBed.createComponent(WeCandidateJobStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
