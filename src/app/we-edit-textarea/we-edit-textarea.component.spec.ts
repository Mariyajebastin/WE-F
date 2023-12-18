import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEditTextareaComponent } from './we-edit-textarea.component';

describe('WeEditTextareaComponent', () => {
  let component: WeEditTextareaComponent;
  let fixture: ComponentFixture<WeEditTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEditTextareaComponent]
    });
    fixture = TestBed.createComponent(WeEditTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
