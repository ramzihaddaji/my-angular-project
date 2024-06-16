import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisateurDetailsComponent } from './organisateur-details.component';

describe('OrganisateurDetailsComponent', () => {
  let component: OrganisateurDetailsComponent;
  let fixture: ComponentFixture<OrganisateurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisateurDetailsComponent]
    });
    fixture = TestBed.createComponent(OrganisateurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
