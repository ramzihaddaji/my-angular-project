import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceEvenetOrgComponent } from './ressource-evenet-org.component';

describe('RessourceEvenetOrgComponent', () => {
  let component: RessourceEvenetOrgComponent;
  let fixture: ComponentFixture<RessourceEvenetOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceEvenetOrgComponent]
    });
    fixture = TestBed.createComponent(RessourceEvenetOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
