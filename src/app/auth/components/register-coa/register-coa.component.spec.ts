import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCOAComponent } from './register-coa.component';

describe('RegisterCOAComponent', () => {
  let component: RegisterCOAComponent;
  let fixture: ComponentFixture<RegisterCOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCOAComponent]
    });
    fixture = TestBed.createComponent(RegisterCOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
