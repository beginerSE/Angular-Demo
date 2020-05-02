import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlauoutSampleComponent } from './flexlauout-sample.component';

describe('FlexlauoutSampleComponent', () => {
  let component: FlexlauoutSampleComponent;
  let fixture: ComponentFixture<FlexlauoutSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexlauoutSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexlauoutSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
