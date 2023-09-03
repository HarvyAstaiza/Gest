import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudentsComponent } from './home-students.component';

describe('HomeStudentsComponent', () => {
  let component: HomeStudentsComponent;
  let fixture: ComponentFixture<HomeStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStudentsComponent]
    });
    fixture = TestBed.createComponent(HomeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
