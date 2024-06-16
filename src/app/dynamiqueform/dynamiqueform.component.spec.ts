import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueformComponent } from './dynamiqueform.component';

describe('DynamiqueformComponent', () => {
  let component: DynamiqueformComponent;
  let fixture: ComponentFixture<DynamiqueformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamiqueformComponent]
    });
    fixture = TestBed.createComponent(DynamiqueformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
