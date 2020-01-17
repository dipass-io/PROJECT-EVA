import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdoesworkComponent } from './howdoeswork.component';

describe('HowdoesworkComponent', () => {
  let component: HowdoesworkComponent;
  let fixture: ComponentFixture<HowdoesworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdoesworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdoesworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
