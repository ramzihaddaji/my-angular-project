import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOrganisateurComponent } from './sidebar-organisateur.component';

describe('SidebarOrganisateurComponent', () => {
  let component: SidebarOrganisateurComponent;
  let fixture: ComponentFixture<SidebarOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarOrganisateurComponent]
    });
    fixture = TestBed.createComponent(SidebarOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
