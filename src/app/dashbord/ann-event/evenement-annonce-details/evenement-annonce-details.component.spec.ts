import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementAnnonceDetailsComponent } from './evenement-annonce-details.component';

describe('EvenementAnnonceDetailsComponent', () => {
  let component: EvenementAnnonceDetailsComponent;
  let fixture: ComponentFixture<EvenementAnnonceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementAnnonceDetailsComponent]
    });
    fixture = TestBed.createComponent(EvenementAnnonceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
