import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTeachersComponent } from './eliminar-teachers.component';

describe('EliminarTeachersComponent', () => {
  let component: EliminarTeachersComponent;
  let fixture: ComponentFixture<EliminarTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarTeachersComponent]
    });
    fixture = TestBed.createComponent(EliminarTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
