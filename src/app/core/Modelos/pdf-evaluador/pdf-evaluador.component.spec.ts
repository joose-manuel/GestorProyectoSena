import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfEvaluadorComponent } from './pdf-evaluador.component';

describe('PdfEvaluadorComponent', () => {
  let component: PdfEvaluadorComponent;
  let fixture: ComponentFixture<PdfEvaluadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfEvaluadorComponent]
    });
    fixture = TestBed.createComponent(PdfEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
