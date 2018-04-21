import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortestJobFirstComponent } from './shortest-job-first.component';

describe('ShortestJobFirstComponent', () => {
  let component: ShortestJobFirstComponent;
  let fixture: ComponentFixture<ShortestJobFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortestJobFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortestJobFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
