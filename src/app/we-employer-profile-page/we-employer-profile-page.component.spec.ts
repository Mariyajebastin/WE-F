import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerProfilePageComponent } from './we-employer-profile-page.component';

describe('WeEmployerProfilePageComponent', () => {
  let component: WeEmployerProfilePageComponent;
  let fixture: ComponentFixture<WeEmployerProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerProfilePageComponent]
    });
    fixture = TestBed.createComponent(WeEmployerProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
