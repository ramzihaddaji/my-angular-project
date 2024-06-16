import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventannComponent } from './eventann.component';

describe('EventannComponent', () => {
  let component: EventannComponent;
  let fixture: ComponentFixture<EventannComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventannComponent]
    });
    fixture = TestBed.createComponent(EventannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
