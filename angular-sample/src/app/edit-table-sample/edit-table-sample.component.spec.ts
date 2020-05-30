import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableSampleComponent } from './edit-table-sample.component';

describe('EditTableSampleComponent', () => {
  let component: EditTableSampleComponent;
  let fixture: ComponentFixture<EditTableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
