import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerLoginPageComponent } from './we-employer-login-page.component';

describe('WeEmployerLoginPageComponent', () => {
  let component: WeEmployerLoginPageComponent;
  let fixture: ComponentFixture<WeEmployerLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerLoginPageComponent]
    });
    fixture = TestBed.createComponent(WeEmployerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
