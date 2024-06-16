import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceEventComponent } from './ressource-event.component';

describe('RessourceEventComponent', () => {
  let component: RessourceEventComponent;
  let fixture: ComponentFixture<RessourceEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RessourceEventComponent]
    });
    fixture = TestBed.createComponent(RessourceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
