import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEditDropdownComponent } from './we-edit-dropdown.component';

describe('WeEditDropdownComponent', () => {
  let component: WeEditDropdownComponent;
  let fixture: ComponentFixture<WeEditDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEditDropdownComponent]
    });
    fixture = TestBed.createComponent(WeEditDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
