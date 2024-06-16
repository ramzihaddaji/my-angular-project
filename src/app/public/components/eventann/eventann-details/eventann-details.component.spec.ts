import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventannDetailsComponent } from './eventann-details.component';

describe('EventannDetailsComponent', () => {
  let component: EventannDetailsComponent;
  let fixture: ComponentFixture<EventannDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventannDetailsComponent]
    });
    fixture = TestBed.createComponent(EventannDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
