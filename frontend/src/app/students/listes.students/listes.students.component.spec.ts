import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesStudentsComponent } from './listes.students.component';

describe('ListesStudentsComponent', () => {
  let component: ListesStudentsComponent;
  let fixture: ComponentFixture<ListesStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesStudentsComponent]
    });
    fixture = TestBed.createComponent(ListesStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
