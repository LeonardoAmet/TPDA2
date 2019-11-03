import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMedicionesPage } from './tabla-mediciones.page';

describe('TablaMedicionesPage', () => {
  let component: TablaMedicionesPage;
  let fixture: ComponentFixture<TablaMedicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMedicionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMedicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
