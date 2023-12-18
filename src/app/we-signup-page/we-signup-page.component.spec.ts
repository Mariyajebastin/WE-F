import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeSignupPageComponent } from './we-signup-page.component';

describe('WeSignupPageComponent', () => {
  let component: WeSignupPageComponent;
  let fixture: ComponentFixture<WeSignupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeSignupPageComponent]
    });
    fixture = TestBed.createComponent(WeSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
