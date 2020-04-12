import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitflyerSampleComponent } from './bitflyer-sample.component';

describe('BitflyerSampleComponent', () => {
  let component: BitflyerSampleComponent;
  let fixture: ComponentFixture<BitflyerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitflyerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitflyerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
