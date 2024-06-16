import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChoicesComponent } from './details-choices.component';

describe('DetailsChoicesComponent', () => {
  let component: DetailsChoicesComponent;
  let fixture: ComponentFixture<DetailsChoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsChoicesComponent]
    });
    fixture = TestBed.createComponent(DetailsChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
