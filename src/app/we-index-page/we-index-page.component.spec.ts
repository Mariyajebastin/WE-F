import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeIndexPageComponent } from './we-index-page.component';

describe('WeIndexPageComponent', () => {
  let component: WeIndexPageComponent;
  let fixture: ComponentFixture<WeIndexPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeIndexPageComponent]
    });
    fixture = TestBed.createComponent(WeIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
