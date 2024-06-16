import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterOrganisateurComponent } from './affecter-organisateur.component';

describe('AffecterOrganisateurComponent', () => {
  let component: AffecterOrganisateurComponent;
  let fixture: ComponentFixture<AffecterOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterOrganisateurComponent]
    });
    fixture = TestBed.createComponent(AffecterOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
