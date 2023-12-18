import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerProfileDetailsComponent } from './we-employer-profile-details.component';

describe('WeEmployerProfileDetailsComponent', () => {
  let component: WeEmployerProfileDetailsComponent;
  let fixture: ComponentFixture<WeEmployerProfileDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerProfileDetailsComponent]
    });
    fixture = TestBed.createComponent(WeEmployerProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
