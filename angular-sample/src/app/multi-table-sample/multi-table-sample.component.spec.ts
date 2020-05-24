import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTableSampleComponent } from './multi-table-sample.component';

describe('MultiTableSampleComponent', () => {
  let component: MultiTableSampleComponent;
  let fixture: ComponentFixture<MultiTableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
