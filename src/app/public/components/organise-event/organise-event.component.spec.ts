import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseEventComponent } from './organise-event.component';

describe('OrganiseEventComponent', () => {
  let component: OrganiseEventComponent;
  let fixture: ComponentFixture<OrganiseEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganiseEventComponent]
    });
    fixture = TestBed.createComponent(OrganiseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
