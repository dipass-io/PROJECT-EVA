import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackdevComponent } from './fullstackdev.component';

describe('FullstackdevComponent', () => {
  let component: FullstackdevComponent;
  let fixture: ComponentFixture<FullstackdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullstackdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstackdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
