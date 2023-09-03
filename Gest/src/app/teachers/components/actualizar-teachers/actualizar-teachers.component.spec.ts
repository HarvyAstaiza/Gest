import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTeachersComponent } from './actualizar-teachers.component';

describe('ActualizarTeachersComponent', () => {
  let component: ActualizarTeachersComponent;
  let fixture: ComponentFixture<ActualizarTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTeachersComponent]
    });
    fixture = TestBed.createComponent(ActualizarTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
