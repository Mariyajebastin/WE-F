import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WePasswordFieldComponent } from './we-password-field.component';

describe('WePasswordFieldComponent', () => {
  let component: WePasswordFieldComponent;
  let fixture: ComponentFixture<WePasswordFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WePasswordFieldComponent]
    });
    fixture = TestBed.createComponent(WePasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
