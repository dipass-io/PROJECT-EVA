import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocspComponent } from './docsp.component';

describe('DocspComponent', () => {
  let component: DocspComponent;
  let fixture: ComponentFixture<DocspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
