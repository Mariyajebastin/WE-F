import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCandidateJobSearchComponent } from './we-candidate-job-search.component';

describe('WeCandidateJobSearchComponent', () => {
  let component: WeCandidateJobSearchComponent;
  let fixture: ComponentFixture<WeCandidateJobSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeCandidateJobSearchComponent]
    });
    fixture = TestBed.createComponent(WeCandidateJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
