import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSustentarEvaluadorComponent } from './proyectos-sustentar-evaluador.component';

describe('ProyectosSustentarEvaluadorComponent', () => {
  let component: ProyectosSustentarEvaluadorComponent;
  let fixture: ComponentFixture<ProyectosSustentarEvaluadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosSustentarEvaluadorComponent]
    });
    fixture = TestBed.createComponent(ProyectosSustentarEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
