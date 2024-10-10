import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricteriosInstructorComponent } from './cricterios-instructor.component';

describe('CricteriosInstructorComponent', () => {
  let component: CricteriosInstructorComponent;
  let fixture: ComponentFixture<CricteriosInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricteriosInstructorComponent]
    });
    fixture = TestBed.createComponent(CricteriosInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
