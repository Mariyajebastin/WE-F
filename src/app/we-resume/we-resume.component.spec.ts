import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeResumeComponent } from './we-resume.component';

describe('WeResumeComponent', () => {
  let component: WeResumeComponent;
  let fixture: ComponentFixture<WeResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeResumeComponent]
    });
    fixture = TestBed.createComponent(WeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
