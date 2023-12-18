import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerSignupPageComponent } from './we-employer-signup-page.component';

describe('WeEmployerSignupPageComponent', () => {
  let component: WeEmployerSignupPageComponent;
  let fixture: ComponentFixture<WeEmployerSignupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerSignupPageComponent]
    });
    fixture = TestBed.createComponent(WeEmployerSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
