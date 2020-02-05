import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpComponent } from './contactp.component';

describe('ContactpComponent', () => {
  let component: ContactpComponent;
  let fixture: ComponentFixture<ContactpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
