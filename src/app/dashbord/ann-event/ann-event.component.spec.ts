import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnEventComponent } from './ann-event.component';

describe('AnnEventComponent', () => {
  let component: AnnEventComponent;
  let fixture: ComponentFixture<AnnEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnEventComponent]
    });
    fixture = TestBed.createComponent(AnnEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
