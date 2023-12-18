import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeJobpostComponent } from './we-jobpost.component';

describe('WeJobpostComponent', () => {
  let component: WeJobpostComponent;
  let fixture: ComponentFixture<WeJobpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeJobpostComponent]
    });
    fixture = TestBed.createComponent(WeJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
