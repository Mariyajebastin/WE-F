import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UukFooterComponent } from './uuk-footer.component';

describe('UukFooterComponent', () => {
  let component: UukFooterComponent;
  let fixture: ComponentFixture<UukFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UukFooterComponent]
    });
    fixture = TestBed.createComponent(UukFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
