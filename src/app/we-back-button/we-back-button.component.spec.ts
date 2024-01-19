import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeBackButtonComponent } from './we-back-button.component';

describe('WeBackButtonComponent', () => {
  let component: WeBackButtonComponent;
  let fixture: ComponentFixture<WeBackButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeBackButtonComponent]
    });
    fixture = TestBed.createComponent(WeBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
