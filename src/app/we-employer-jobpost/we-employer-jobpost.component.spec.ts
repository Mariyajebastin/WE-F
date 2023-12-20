import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerJobpostComponent } from './we-employer-jobpost.component';

describe('WeEmployerJobpostComponent', () => {
  let component: WeEmployerJobpostComponent;
  let fixture: ComponentFixture<WeEmployerJobpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerJobpostComponent]
    });
    fixture = TestBed.createComponent(WeEmployerJobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
