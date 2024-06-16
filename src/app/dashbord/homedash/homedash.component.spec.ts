import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashComponent } from './homedash.component';

describe('HomedashComponent', () => {
  let component: HomedashComponent;
  let fixture: ComponentFixture<HomedashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedashComponent]
    });
    fixture = TestBed.createComponent(HomedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
