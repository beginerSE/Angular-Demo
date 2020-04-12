import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinSampleComponent } from './bitcoin-sample.component';

describe('BitcoinSampleComponent', () => {
  let component: BitcoinSampleComponent;
  let fixture: ComponentFixture<BitcoinSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
