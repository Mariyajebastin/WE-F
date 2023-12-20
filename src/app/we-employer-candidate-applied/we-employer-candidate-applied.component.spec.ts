import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerCandidateAppliedComponent } from './we-employer-candidate-applied.component';

describe('WeEmployerCandidateAppliedComponent', () => {
  let component: WeEmployerCandidateAppliedComponent;
  let fixture: ComponentFixture<WeEmployerCandidateAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerCandidateAppliedComponent]
    });
    fixture = TestBed.createComponent(WeEmployerCandidateAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
