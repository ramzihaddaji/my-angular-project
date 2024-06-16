import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCOAComponent } from './login-coa.component';

describe('LoginCOAComponent', () => {
  let component: LoginCOAComponent;
  let fixture: ComponentFixture<LoginCOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCOAComponent]
    });
    fixture = TestBed.createComponent(LoginCOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
