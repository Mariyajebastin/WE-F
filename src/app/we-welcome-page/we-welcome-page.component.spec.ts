import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeWelcomePageComponent } from './we-welcome-page.component';

describe('WeWelcomePageComponent', () => {
  let component: WeWelcomePageComponent;
  let fixture: ComponentFixture<WeWelcomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeWelcomePageComponent]
    });
    fixture = TestBed.createComponent(WeWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
