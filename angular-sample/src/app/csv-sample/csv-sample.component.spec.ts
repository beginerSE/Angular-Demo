import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvSampleComponent } from './csv-sample.component';

describe('CsvSampleComponent', () => {
  let component: CsvSampleComponent;
  let fixture: ComponentFixture<CsvSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
