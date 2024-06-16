import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreInscriComponent } from './filtre-inscri.component';

describe('FiltreInscriComponent', () => {
  let component: FiltreInscriComponent;
  let fixture: ComponentFixture<FiltreInscriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltreInscriComponent]
    });
    fixture = TestBed.createComponent(FiltreInscriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
