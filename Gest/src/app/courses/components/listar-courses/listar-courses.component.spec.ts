import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoursesComponent } from './listar-courses.component';

describe('ListarCoursesComponent', () => {
  let component: ListarCoursesComponent;
  let fixture: ComponentFixture<ListarCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCoursesComponent]
    });
    fixture = TestBed.createComponent(ListarCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
