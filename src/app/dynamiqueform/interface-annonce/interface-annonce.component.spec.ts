import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAnnonceComponent } from './interface-annonce.component';

describe('InterfaceAnnonceComponent', () => {
  let component: InterfaceAnnonceComponent;
  let fixture: ComponentFixture<InterfaceAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceAnnonceComponent]
    });
    fixture = TestBed.createComponent(InterfaceAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
