import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTextfieldComponent } from './we-textfield.component';

describe('WeTextfieldComponent', () => {
  let component: WeTextfieldComponent;
  let fixture: ComponentFixture<WeTextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeTextfieldComponent]
    });
    fixture = TestBed.createComponent(WeTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
