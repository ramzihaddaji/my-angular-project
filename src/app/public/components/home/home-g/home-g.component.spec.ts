import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGComponent } from './home-g.component';

describe('HomeGComponent', () => {
  let component: HomeGComponent;
  let fixture: ComponentFixture<HomeGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGComponent]
    });
    fixture = TestBed.createComponent(HomeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
