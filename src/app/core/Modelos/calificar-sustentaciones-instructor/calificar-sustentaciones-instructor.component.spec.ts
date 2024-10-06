import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarSustentacionesInstructorComponent } from './calificar-sustentaciones-instructor.component';

describe('CalificarSustentacionesInstructorComponent', () => {
  let component: CalificarSustentacionesInstructorComponent;
  let fixture: ComponentFixture<CalificarSustentacionesInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificarSustentacionesInstructorComponent]
    });
    fixture = TestBed.createComponent(CalificarSustentacionesInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
