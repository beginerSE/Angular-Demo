import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanelSampleComponent } from './expanel-sample.component';

describe('ExpanelSampleComponent', () => {
  let component: ExpanelSampleComponent;
  let fixture: ComponentFixture<ExpanelSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanelSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanelSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
