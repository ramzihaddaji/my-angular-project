import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCollaborateurComponent } from './navbar-collaborateur.component';

describe('NavbarCollaborateurComponent', () => {
  let component: NavbarCollaborateurComponent;
  let fixture: ComponentFixture<NavbarCollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCollaborateurComponent]
    });
    fixture = TestBed.createComponent(NavbarCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
