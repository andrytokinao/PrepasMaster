import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenueComponent } from './top.menue.component';

describe('TopMenueComponent', () => {
  let component: TopMenueComponent;
  let fixture: ComponentFixture<TopMenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenueComponent]
    });
    fixture = TestBed.createComponent(TopMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
