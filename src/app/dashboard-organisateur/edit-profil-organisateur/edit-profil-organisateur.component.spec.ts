import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilOrganisateurComponent } from './edit-profil-organisateur.component';

describe('EditProfilOrganisateurComponent', () => {
  let component: EditProfilOrganisateurComponent;
  let fixture: ComponentFixture<EditProfilOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProfilOrganisateurComponent]
    });
    fixture = TestBed.createComponent(EditProfilOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
