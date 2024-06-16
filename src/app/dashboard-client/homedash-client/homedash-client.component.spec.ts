import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashClientComponent } from './homedash-client.component';

describe('HomedashClientComponent', () => {
  let component: HomedashClientComponent;
  let fixture: ComponentFixture<HomedashClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomedashClientComponent]
    });
    fixture = TestBed.createComponent(HomedashClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
