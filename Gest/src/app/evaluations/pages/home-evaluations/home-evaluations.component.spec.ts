import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEvaluationsComponent } from './home-evaluations.component';

describe('HomeEvaluationsComponent', () => {
  let component: HomeEvaluationsComponent;
  let fixture: ComponentFixture<HomeEvaluationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEvaluationsComponent]
    });
    fixture = TestBed.createComponent(HomeEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
