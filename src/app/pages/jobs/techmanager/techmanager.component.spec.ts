import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechmanagerComponent } from './techmanager.component';

describe('TechmanagerComponent', () => {
  let component: TechmanagerComponent;
  let fixture: ComponentFixture<TechmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
