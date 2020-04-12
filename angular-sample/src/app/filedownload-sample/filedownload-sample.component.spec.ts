import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledownloadSampleComponent } from './filedownload-sample.component';

describe('FiledownloadSampleComponent', () => {
  let component: FiledownloadSampleComponent;
  let fixture: ComponentFixture<FiledownloadSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledownloadSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledownloadSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
