import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcalendarSampleComponent } from './ngcalendar-sample.component';

describe('NgcalendarSampleComponent', () => {
  let component: NgcalendarSampleComponent;
  let fixture: ComponentFixture<NgcalendarSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcalendarSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcalendarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
