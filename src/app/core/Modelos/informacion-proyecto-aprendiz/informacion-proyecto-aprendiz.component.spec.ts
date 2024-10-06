import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionProyectoAprendizComponent } from './informacion-proyecto-aprendiz.component';

describe('InformacionProyectoAprendizComponent', () => {
  let component: InformacionProyectoAprendizComponent;
  let fixture: ComponentFixture<InformacionProyectoAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionProyectoAprendizComponent]
    });
    fixture = TestBed.createComponent(InformacionProyectoAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
