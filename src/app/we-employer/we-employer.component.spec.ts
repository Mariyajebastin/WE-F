import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerComponent } from './we-employer.component';

describe('WeEmployerComponent', () => {
  let component: WeEmployerComponent;
  let fixture: ComponentFixture<WeEmployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerComponent]
    });
    fixture = TestBed.createComponent(WeEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
