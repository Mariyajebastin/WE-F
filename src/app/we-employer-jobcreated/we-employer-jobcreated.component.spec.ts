import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerJobcreatedComponent } from './we-employer-jobcreated.component';

describe('WeEmployerJobcreatedComponent', () => {
  let component: WeEmployerJobcreatedComponent;
  let fixture: ComponentFixture<WeEmployerJobcreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerJobcreatedComponent]
    });
    fixture = TestBed.createComponent(WeEmployerJobcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
