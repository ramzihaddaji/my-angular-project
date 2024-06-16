import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashOrganisateurComponent } from './homedash-organisateur.component';

describe('HomedashOrganisateurComponent', () => {
  let component: HomedashOrganisateurComponent;
  let fixture: ComponentFixture<HomedashOrganisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedashOrganisateurComponent]
    });
    fixture = TestBed.createComponent(HomedashOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
