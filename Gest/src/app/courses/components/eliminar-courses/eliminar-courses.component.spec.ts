import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCoursesComponent } from './eliminar-courses.component';

describe('EliminarCoursesComponent', () => {
  let component: EliminarCoursesComponent;
  let fixture: ComponentFixture<EliminarCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCoursesComponent]
    });
    fixture = TestBed.createComponent(EliminarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
