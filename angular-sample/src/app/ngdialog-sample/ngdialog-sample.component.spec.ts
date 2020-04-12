import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdialogSampleComponent } from './ngdialog-sample.component';

describe('NgdialogSampleComponent', () => {
  let component: NgdialogSampleComponent;
  let fixture: ComponentFixture<NgdialogSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdialogSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdialogSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
