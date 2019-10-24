import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedHomePage } from './restricted-home.page';

describe('RestrictedHomePage', () => {
  let component: RestrictedHomePage;
  let fixture: ComponentFixture<RestrictedHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
