import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeNavbarComponent } from './we-navbar.component';

describe('WeNavbarComponent', () => {
  let component: WeNavbarComponent;
  let fixture: ComponentFixture<WeNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeNavbarComponent]
    });
    fixture = TestBed.createComponent(WeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
