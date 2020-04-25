import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerSampleComponent } from './pdf-viewer-sample.component';

describe('PdfViewerSampleComponent', () => {
  let component: PdfViewerSampleComponent;
  let fixture: ComponentFixture<PdfViewerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
