import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousCategorieDetailsComponent } from './sous-categorie-details.component';

describe('SousCategorieDetailsComponent', () => {
  let component: SousCategorieDetailsComponent;
  let fixture: ComponentFixture<SousCategorieDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousCategorieDetailsComponent]
    });
    fixture = TestBed.createComponent(SousCategorieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
