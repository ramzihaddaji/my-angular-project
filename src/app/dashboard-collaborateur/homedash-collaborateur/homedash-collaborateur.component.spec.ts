import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashCollaborateurComponent } from './homedash-collaborateur.component';

describe('HomedashCollaborateurComponent', () => {
  let component: HomedashCollaborateurComponent;
  let fixture: ComponentFixture<HomedashCollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedashCollaborateurComponent]
    });
    fixture = TestBed.createComponent(HomedashCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
