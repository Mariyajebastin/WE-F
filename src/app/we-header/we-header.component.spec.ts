import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeHeaderComponent } from './we-header.component';

describe('WeHeaderComponent', () => {
  let component: WeHeaderComponent;
  let fixture: ComponentFixture<WeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeHeaderComponent]
    });
    fixture = TestBed.createComponent(WeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
