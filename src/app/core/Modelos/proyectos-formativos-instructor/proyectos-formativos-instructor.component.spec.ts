import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFormativosInstructorComponent } from './proyectos-formativos-instructor.component';

describe('ProyectosFormativosInstructorComponent', () => {
  let component: ProyectosFormativosInstructorComponent;
  let fixture: ComponentFixture<ProyectosFormativosInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosFormativosInstructorComponent]
    });
    fixture = TestBed.createComponent(ProyectosFormativosInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
