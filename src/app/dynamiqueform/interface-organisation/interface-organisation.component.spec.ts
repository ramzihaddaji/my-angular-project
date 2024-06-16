import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceOrganisationComponent } from './interface-organisation.component';

describe('InterfaceOrganisationComponent', () => {
  let component: InterfaceOrganisationComponent;
  let fixture: ComponentFixture<InterfaceOrganisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceOrganisationComponent]
    });
    fixture = TestBed.createComponent(InterfaceOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
