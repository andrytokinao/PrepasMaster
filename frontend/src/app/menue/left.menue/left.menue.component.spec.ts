import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenueComponent } from './left.menue.component';

describe('LeftMenueComponent', () => {
  let component: LeftMenueComponent;
  let fixture: ComponentFixture<LeftMenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftMenueComponent]
    });
    fixture = TestBed.createComponent(LeftMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
