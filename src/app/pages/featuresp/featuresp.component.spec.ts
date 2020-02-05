import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturespComponent } from './featuresp.component';

describe('FeaturespComponent', () => {
  let component: FeaturespComponent;
  let fixture: ComponentFixture<FeaturespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
