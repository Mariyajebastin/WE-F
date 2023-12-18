import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCandidateComponent } from './we-candidate.component';

describe('WeCandidateComponent', () => {
  let component: WeCandidateComponent;
  let fixture: ComponentFixture<WeCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeCandidateComponent]
    });
    fixture = TestBed.createComponent(WeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
