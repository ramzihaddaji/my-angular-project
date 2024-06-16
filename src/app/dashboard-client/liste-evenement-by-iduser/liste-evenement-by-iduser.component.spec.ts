import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementByIDUSerComponent } from './liste-evenement-by-iduser.component';

describe('ListeEvenementByIDUSerComponent', () => {
  let component: ListeEvenementByIDUSerComponent;
  let fixture: ComponentFixture<ListeEvenementByIDUSerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEvenementByIDUSerComponent]
    });
    fixture = TestBed.createComponent(ListeEvenementByIDUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
