import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerWelcomePageComponent } from './we-employer-welcome-page.component';

describe('WeEmployerWelcomePageComponent', () => {
  let component: WeEmployerWelcomePageComponent;
  let fixture: ComponentFixture<WeEmployerWelcomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerWelcomePageComponent]
    });
    fixture = TestBed.createComponent(WeEmployerWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
