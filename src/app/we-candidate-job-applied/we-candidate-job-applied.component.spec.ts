import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCandidateJobAppliedComponent } from './we-candidate-job-applied.component';

describe('WeCandidateJobAppliedComponent', () => {
  let component: WeCandidateJobAppliedComponent;
  let fixture: ComponentFixture<WeCandidateJobAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeCandidateJobAppliedComponent]
    });
    fixture = TestBed.createComponent(WeCandidateJobAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
