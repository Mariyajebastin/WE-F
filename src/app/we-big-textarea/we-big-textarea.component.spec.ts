import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeBigTextareaComponent } from './we-big-textarea.component';

describe('WeBigTextareaComponent', () => {
  let component: WeBigTextareaComponent;
  let fixture: ComponentFixture<WeBigTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeBigTextareaComponent]
    });
    fixture = TestBed.createComponent(WeBigTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
