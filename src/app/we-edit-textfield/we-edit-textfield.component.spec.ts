import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEditTextfieldComponent } from './we-edit-textfield.component';

describe('WeEditTextfieldComponent', () => {
  let component: WeEditTextfieldComponent;
  let fixture: ComponentFixture<WeEditTextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEditTextfieldComponent]
    });
    fixture = TestBed.createComponent(WeEditTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
