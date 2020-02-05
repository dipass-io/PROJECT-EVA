import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniordevComponent } from './juniordev.component';

describe('JuniordevComponent', () => {
  let component: JuniordevComponent;
  let fixture: ComponentFixture<JuniordevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniordevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniordevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
