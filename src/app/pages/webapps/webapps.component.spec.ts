import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappsComponent } from './webapps.component';

describe('WebappsComponent', () => {
  let component: WebappsComponent;
  let fixture: ComponentFixture<WebappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
