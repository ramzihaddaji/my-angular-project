import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCategoriesComponent } from './details-categories.component';

describe('DetailsCategoriesComponent', () => {
  let component: DetailsCategoriesComponent;
  let fixture: ComponentFixture<DetailsCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCategoriesComponent]
    });
    fixture = TestBed.createComponent(DetailsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
