import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonFabPage } from './ion-fab.page';

describe('IonFabPage', () => {
  let component: IonFabPage;
  let fixture: ComponentFixture<IonFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
