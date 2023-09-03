import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarStudentsComponent } from './eliminar-students.component';

describe('EliminarStudentsComponent', () => {
  let component: EliminarStudentsComponent;
  let fixture: ComponentFixture<EliminarStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarStudentsComponent]
    });
    fixture = TestBed.createComponent(EliminarStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
