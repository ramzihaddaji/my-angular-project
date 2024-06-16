import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCollaborateurComponent } from './dashboard-collaborateur.component';

describe('DashboardCollaborateurComponent', () => {
  let component: DashboardCollaborateurComponent;
  let fixture: ComponentFixture<DashboardCollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCollaborateurComponent]
    });
    fixture = TestBed.createComponent(DashboardCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
