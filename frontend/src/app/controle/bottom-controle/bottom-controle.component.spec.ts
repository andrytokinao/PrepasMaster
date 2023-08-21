import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomControleComponent } from './bottom-controle.component';

describe('BottomControleComponent', () => {
  let component: BottomControleComponent;
  let fixture: ComponentFixture<BottomControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomControleComponent]
    });
    fixture = TestBed.createComponent(BottomControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
