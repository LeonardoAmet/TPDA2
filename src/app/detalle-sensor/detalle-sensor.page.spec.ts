import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSensorPage } from './detalle-sensor.page';

describe('DetalleSensorPage', () => {
  let component: DetalleSensorPage;
  let fixture: ComponentFixture<DetalleSensorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSensorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
