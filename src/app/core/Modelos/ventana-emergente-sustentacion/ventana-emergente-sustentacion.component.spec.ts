import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEmergenteSustentacionComponent } from './ventana-emergente-sustentacion.component';

describe('VentanaEmergenteSustentacionComponent', () => {
  let component: VentanaEmergenteSustentacionComponent;
  let fixture: ComponentFixture<VentanaEmergenteSustentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaEmergenteSustentacionComponent]
    });
    fixture = TestBed.createComponent(VentanaEmergenteSustentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
