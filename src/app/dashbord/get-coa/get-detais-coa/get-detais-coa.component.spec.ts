import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetaisCOAComponent } from './get-detais-coa.component';

describe('GetDetaisCOAComponent', () => {
  let component: GetDetaisCOAComponent;
  let fixture: ComponentFixture<GetDetaisCOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDetaisCOAComponent]
    });
    fixture = TestBed.createComponent(GetDetaisCOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
