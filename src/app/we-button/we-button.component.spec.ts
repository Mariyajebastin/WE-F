import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeButtonComponent } from './we-button.component';

describe('WeButtonComponent', () => {
  let component: WeButtonComponent;
  let fixture: ComponentFixture<WeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeButtonComponent]
    });
    fixture = TestBed.createComponent(WeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
