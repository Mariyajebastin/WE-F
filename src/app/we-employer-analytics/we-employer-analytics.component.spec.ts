import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerAnalyticsComponent } from './we-employer-analytics.component';

describe('WeEmployerAnalyticsComponent', () => {
  let component: WeEmployerAnalyticsComponent;
  let fixture: ComponentFixture<WeEmployerAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerAnalyticsComponent]
    });
    fixture = TestBed.createComponent(WeEmployerAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
