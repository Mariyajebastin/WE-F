import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeProfileComponent } from './we-profile.component';

describe('WeProfileComponent', () => {
  let component: WeProfileComponent;
  let fixture: ComponentFixture<WeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeProfileComponent]
    });
    fixture = TestBed.createComponent(WeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
