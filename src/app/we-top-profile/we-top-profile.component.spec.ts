import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTopProfileComponent } from './we-top-profile.component';

describe('WeTopProfileComponent', () => {
  let component: WeTopProfileComponent;
  let fixture: ComponentFixture<WeTopProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeTopProfileComponent]
    });
    fixture = TestBed.createComponent(WeTopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
