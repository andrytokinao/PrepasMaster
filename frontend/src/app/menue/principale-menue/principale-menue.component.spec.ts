import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaleMenueComponent } from './principale-menue.component';

describe('PrincipaleMenueComponent', () => {
  let component: PrincipaleMenueComponent;
  let fixture: ComponentFixture<PrincipaleMenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipaleMenueComponent]
    });
    fixture = TestBed.createComponent(PrincipaleMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
