import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguploadSampleComponent } from './ngupload-sample.component';

describe('NguploadSampleComponent', () => {
  let component: NguploadSampleComponent;
  let fixture: ComponentFixture<NguploadSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguploadSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguploadSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
