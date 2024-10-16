import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEmergenteEditarInstructorComponent } from './ventana-emergente-editar-instructor.component';

describe('VentanaEmergenteEditarInstructorComponent', () => {
  let component: VentanaEmergenteEditarInstructorComponent;
  let fixture: ComponentFixture<VentanaEmergenteEditarInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaEmergenteEditarInstructorComponent]
    });
    fixture = TestBed.createComponent(VentanaEmergenteEditarInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
