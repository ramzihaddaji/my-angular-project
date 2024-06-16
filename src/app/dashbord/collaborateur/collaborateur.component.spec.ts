import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurComponent } from './collaborateur.component';

describe('CollaborateurComponent', () => {
  let component: CollaborateurComponent;
  let fixture: ComponentFixture<CollaborateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborateurComponent]
    });
    fixture = TestBed.createComponent(CollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
