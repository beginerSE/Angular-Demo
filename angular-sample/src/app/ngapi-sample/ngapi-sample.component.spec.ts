import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgapiSampleComponent } from './ngapi-sample.component';

describe('NgapiSampleComponent', () => {
  let component: NgapiSampleComponent;
  let fixture: ComponentFixture<NgapiSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgapiSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgapiSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
