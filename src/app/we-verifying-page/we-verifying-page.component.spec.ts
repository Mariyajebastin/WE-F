import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeVerifyingPageComponent } from './we-verifying-page.component';

describe('WeVerifyingPageComponent', () => {
  let component: WeVerifyingPageComponent;
  let fixture: ComponentFixture<WeVerifyingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeVerifyingPageComponent]
    });
    fixture = TestBed.createComponent(WeVerifyingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
