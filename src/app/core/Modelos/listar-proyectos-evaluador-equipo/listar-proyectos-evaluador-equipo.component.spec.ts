import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProyectosEvaluadorEquipoComponent } from './listar-proyectos-evaluador-equipo.component';

describe('ListarProyectosEvaluadorEquipoComponent', () => {
  let component: ListarProyectosEvaluadorEquipoComponent;
  let fixture: ComponentFixture<ListarProyectosEvaluadorEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProyectosEvaluadorEquipoComponent]
    });
    fixture = TestBed.createComponent(ListarProyectosEvaluadorEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
