import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerCreatedjobsComponent } from './we-employer-createdjobs.component';

describe('WeEmployerCreatedjobsComponent', () => {
  let component: WeEmployerCreatedjobsComponent;
  let fixture: ComponentFixture<WeEmployerCreatedjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerCreatedjobsComponent]
    });
    fixture = TestBed.createComponent(WeEmployerCreatedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
