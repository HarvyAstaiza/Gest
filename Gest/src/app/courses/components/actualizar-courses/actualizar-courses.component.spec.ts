import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCoursesComponent } from './actualizar-courses.component';

describe('ActualizarCoursesComponent', () => {
  let component: ActualizarCoursesComponent;
  let fixture: ComponentFixture<ActualizarCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCoursesComponent]
    });
    fixture = TestBed.createComponent(ActualizarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
