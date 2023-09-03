import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeachersComponent } from './home-teachers.component';

describe('HomeTeachersComponent', () => {
  let component: HomeTeachersComponent;
  let fixture: ComponentFixture<HomeTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTeachersComponent]
    });
    fixture = TestBed.createComponent(HomeTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
