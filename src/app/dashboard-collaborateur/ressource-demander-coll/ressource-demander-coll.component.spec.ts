import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceDemanderCollComponent } from './ressource-demander-coll.component';

describe('RessourceDemanderCollComponent', () => {
  let component: RessourceDemanderCollComponent;
  let fixture: ComponentFixture<RessourceDemanderCollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceDemanderCollComponent]
    });
    fixture = TestBed.createComponent(RessourceDemanderCollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
