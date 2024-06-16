import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganisateurComponent } from './dashboard-organisateur.component';

describe('DashboardOrganisateurComponent', () => {
  let component: DashboardOrganisateurComponent;
  let fixture: ComponentFixture<DashboardOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganisateurComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
