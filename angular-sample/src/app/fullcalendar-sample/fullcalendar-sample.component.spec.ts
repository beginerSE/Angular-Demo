import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarSampleComponent } from './fullcalendar-sample.component';

describe('FullcalendarSampleComponent', () => {
  let component: FullcalendarSampleComponent;
  let fixture: ComponentFixture<FullcalendarSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullcalendarSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
