import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeProfileDetailsComponent } from './we-profile-details.component';

describe('WeProfileDetailsComponent', () => {
  let component: WeProfileDetailsComponent;
  let fixture: ComponentFixture<WeProfileDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeProfileDetailsComponent]
    });
    fixture = TestBed.createComponent(WeProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
