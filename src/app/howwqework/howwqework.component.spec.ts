import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowwqeworkComponent } from './howwqework.component';

describe('HowwqeworkComponent', () => {
  let component: HowwqeworkComponent;
  let fixture: ComponentFixture<HowwqeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowwqeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowwqeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
