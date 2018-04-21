import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInFirstOutComponent } from './first-in-first-out.component';

describe('FirstInFirstOutComponent', () => {
  let component: FirstInFirstOutComponent;
  let fixture: ComponentFixture<FirstInFirstOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInFirstOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInFirstOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
