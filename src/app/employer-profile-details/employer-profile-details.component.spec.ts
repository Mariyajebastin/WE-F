import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileDetailsComponent } from './employer-profile-details.component';

describe('EmployerProfileDetailsComponent', () => {
  let component: EmployerProfileDetailsComponent;
  let fixture: ComponentFixture<EmployerProfileDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerProfileDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployerProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
