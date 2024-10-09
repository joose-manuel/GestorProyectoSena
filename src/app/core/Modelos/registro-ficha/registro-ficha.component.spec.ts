import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFichaComponent } from './registro-ficha.component';

describe('RegistroFichaComponent', () => {
  let component: RegistroFichaComponent;
  let fixture: ComponentFixture<RegistroFichaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFichaComponent]
    });
    fixture = TestBed.createComponent(RegistroFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
