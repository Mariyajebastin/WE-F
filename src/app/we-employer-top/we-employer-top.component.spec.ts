import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerTopComponent } from './we-employer-top.component';

describe('WeEmployerTopComponent', () => {
  let component: WeEmployerTopComponent;
  let fixture: ComponentFixture<WeEmployerTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerTopComponent]
    });
    fixture = TestBed.createComponent(WeEmployerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
