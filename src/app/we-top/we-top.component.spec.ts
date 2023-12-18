import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTopComponent } from './we-top.component';

describe('WeTopComponent', () => {
  let component: WeTopComponent;
  let fixture: ComponentFixture<WeTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeTopComponent]
    });
    fixture = TestBed.createComponent(WeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
