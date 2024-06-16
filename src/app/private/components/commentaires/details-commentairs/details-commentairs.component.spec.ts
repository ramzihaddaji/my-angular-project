import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommentairsComponent } from './details-commentairs.component';

describe('DetailsCommentairsComponent', () => {
  let component: DetailsCommentairsComponent;
  let fixture: ComponentFixture<DetailsCommentairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCommentairsComponent]
    });
    fixture = TestBed.createComponent(DetailsCommentairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
