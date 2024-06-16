import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOrganisateurComponent } from './navbar-organisateur.component';

describe('NavbarOrganisateurComponent', () => {
  let component: NavbarOrganisateurComponent;
  let fixture: ComponentFixture<NavbarOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOrganisateurComponent]
    });
    fixture = TestBed.createComponent(NavbarOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
