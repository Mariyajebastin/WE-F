import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTakePictureComponent } from './we-take-picture.component';

describe('WeTakePictureComponent', () => {
  let component: WeTakePictureComponent;
  let fixture: ComponentFixture<WeTakePictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeTakePictureComponent]
    });
    fixture = TestBed.createComponent(WeTakePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
