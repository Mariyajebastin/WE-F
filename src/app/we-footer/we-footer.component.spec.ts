import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeFooterComponent } from './we-footer.component';

describe('WeFooterComponent', () => {
  let component: WeFooterComponent;
  let fixture: ComponentFixture<WeFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeFooterComponent]
    });
    fixture = TestBed.createComponent(WeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
