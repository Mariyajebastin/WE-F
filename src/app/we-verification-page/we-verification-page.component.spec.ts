import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeVerificationPageComponent } from './we-verification-page.component';

describe('WeVerificationPageComponent', () => {
  let component: WeVerificationPageComponent;
  let fixture: ComponentFixture<WeVerificationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeVerificationPageComponent]
    });
    fixture = TestBed.createComponent(WeVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
