import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguistrarFichasComponent } from './reguistrar-fichas.component';

describe('ReguistrarFichasComponent', () => {
  let component: ReguistrarFichasComponent;
  let fixture: ComponentFixture<ReguistrarFichasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReguistrarFichasComponent]
    });
    fixture = TestBed.createComponent(ReguistrarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
