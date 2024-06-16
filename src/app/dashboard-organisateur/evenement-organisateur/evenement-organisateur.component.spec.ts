import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementOrganisateurComponent } from './evenement-organisateur.component';

describe('EvenementOrganisateurComponent', () => {
  let component: EvenementOrganisateurComponent;
  let fixture: ComponentFixture<EvenementOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementOrganisateurComponent]
    });
    fixture = TestBed.createComponent(EvenementOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
