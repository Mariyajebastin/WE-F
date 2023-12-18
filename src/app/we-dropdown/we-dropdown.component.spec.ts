import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDropdownComponent } from './we-dropdown.component';

describe('WeDropdownComponent', () => {
  let component: WeDropdownComponent;
  let fixture: ComponentFixture<WeDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeDropdownComponent]
    });
    fixture = TestBed.createComponent(WeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
