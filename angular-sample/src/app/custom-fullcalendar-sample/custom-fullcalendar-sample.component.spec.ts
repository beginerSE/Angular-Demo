import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFullcalendarSampleComponent } from './custom-fullcalendar-sample.component';

describe('CustomFullcalendarSampleComponent', () => {
  let component: CustomFullcalendarSampleComponent;
  let fixture: ComponentFixture<CustomFullcalendarSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFullcalendarSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFullcalendarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
