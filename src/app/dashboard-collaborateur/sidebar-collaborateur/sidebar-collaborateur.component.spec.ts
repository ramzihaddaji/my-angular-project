import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollaborateurComponent } from './sidebar-collaborateur.component';

describe('SidebarCollaborateurComponent', () => {
  let component: SidebarCollaborateurComponent;
  let fixture: ComponentFixture<SidebarCollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCollaborateurComponent]
    });
    fixture = TestBed.createComponent(SidebarCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
