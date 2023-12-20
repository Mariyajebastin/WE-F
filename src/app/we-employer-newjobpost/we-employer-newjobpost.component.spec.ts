import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmployerNewjobpostComponent } from './we-employer-newjobpost.component';

describe('WeEmployerNewjobpostComponent', () => {
  let component: WeEmployerNewjobpostComponent;
  let fixture: ComponentFixture<WeEmployerNewjobpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeEmployerNewjobpostComponent]
    });
    fixture = TestBed.createComponent(WeEmployerNewjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
