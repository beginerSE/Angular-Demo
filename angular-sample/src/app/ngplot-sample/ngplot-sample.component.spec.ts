import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplotSampleComponent } from './ngplot-sample.component';

describe('NgplotSampleComponent', () => {
  let component: NgplotSampleComponent;
  let fixture: ComponentFixture<NgplotSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgplotSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplotSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
