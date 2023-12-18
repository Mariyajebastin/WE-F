import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeLoginPageComponent } from './we-login-page.component';

describe('WeLoginPageComponent', () => {
  let component: WeLoginPageComponent;
  let fixture: ComponentFixture<WeLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeLoginPageComponent]
    });
    fixture = TestBed.createComponent(WeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
