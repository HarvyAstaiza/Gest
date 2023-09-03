import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTeachersComponent } from './listar-teachers.component';

describe('ListarTeachersComponent', () => {
  let component: ListarTeachersComponent;
  let fixture: ComponentFixture<ListarTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTeachersComponent]
    });
    fixture = TestBed.createComponent(ListarTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
