import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerJobpostDetailsComponent } from './we-employer-jobpost-details.component';

describe('WeEmployerJobpostDetailsComponent', () => {
  let component: WeEmployerJobpostDetailsComponent;
  let fixture: ComponentFixture<WeEmployerJobpostDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerJobpostDetailsComponent]
    });
    fixture = TestBed.createComponent(WeEmployerJobpostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
