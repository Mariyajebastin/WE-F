import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTextareaComponent } from './we-textarea.component';

describe('WeTextareaComponent', () => {
  let component: WeTextareaComponent;
  let fixture: ComponentFixture<WeTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeTextareaComponent]
    });
    fixture = TestBed.createComponent(WeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
