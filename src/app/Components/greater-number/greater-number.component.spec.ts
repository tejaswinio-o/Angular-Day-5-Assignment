import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterNumberComponent } from './greater-number.component';

describe('GreaterNumberComponent', () => {
  let component: GreaterNumberComponent;
  let fixture: ComponentFixture<GreaterNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreaterNumberComponent]
    });
    fixture = TestBed.createComponent(GreaterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
