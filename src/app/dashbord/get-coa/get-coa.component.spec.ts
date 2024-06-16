import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCOAComponent } from './get-coa.component';

describe('GetCOAComponent', () => {
  let component: GetCOAComponent;
  let fixture: ComponentFixture<GetCOAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCOAComponent]
    });
    fixture = TestBed.createComponent(GetCOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
