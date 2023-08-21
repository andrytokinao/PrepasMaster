import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtidStudentModalComponent } from './etid-student-modal.component';

describe('EtidStudentModalComponent', () => {
  let component: EtidStudentModalComponent;
  let fixture: ComponentFixture<EtidStudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtidStudentModalComponent]
    });
    fixture = TestBed.createComponent(EtidStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
