import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtableSampleComponent } from './ngtable-sample.component';

describe('NgtableSampleComponent', () => {
  let component: NgtableSampleComponent;
  let fixture: ComponentFixture<NgtableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
