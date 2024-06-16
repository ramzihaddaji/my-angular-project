import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieProfileClientComponent } from './modifie-profile-client.component';

describe('ModifieProfileClientComponent', () => {
  let component: ModifieProfileClientComponent;
  let fixture: ComponentFixture<ModifieProfileClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifieProfileClientComponent]
    });
    fixture = TestBed.createComponent(ModifieProfileClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
