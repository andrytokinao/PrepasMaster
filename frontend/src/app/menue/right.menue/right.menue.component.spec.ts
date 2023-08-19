import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenueComponent } from './right.menue.component';

describe('RightMenueComponent', () => {
  let component: RightMenueComponent;
  let fixture: ComponentFixture<RightMenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightMenueComponent]
    });
    fixture = TestBed.createComponent(RightMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
