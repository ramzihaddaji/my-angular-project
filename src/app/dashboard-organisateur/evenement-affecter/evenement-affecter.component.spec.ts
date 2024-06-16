import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementAffecterComponent } from './evenement-affecter.component';

describe('EvenementAffecterComponent', () => {
  let component: EvenementAffecterComponent;
  let fixture: ComponentFixture<EvenementAffecterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementAffecterComponent]
    });
    fixture = TestBed.createComponent(EvenementAffecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
