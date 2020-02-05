import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpComponent } from './aboutp.component';

describe('AboutpComponent', () => {
  let component: AboutpComponent;
  let fixture: ComponentFixture<AboutpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
