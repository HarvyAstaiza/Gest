import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarStudentsComponent } from './actualizar-students.component';

describe('ActualizarStudentsComponent', () => {
  let component: ActualizarStudentsComponent;
  let fixture: ComponentFixture<ActualizarStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarStudentsComponent]
    });
    fixture = TestBed.createComponent(ActualizarStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
