/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableScrollingViewportComponent } from './table-scrolling-viewport.component';

describe('TableScrollingViewportComponent', () => {
  let component: TableScrollingViewportComponent;
  let fixture: ComponentFixture<TableScrollingViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableScrollingViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScrollingViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
