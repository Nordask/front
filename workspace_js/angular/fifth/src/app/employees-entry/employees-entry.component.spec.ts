import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesEntryComponent } from './employees-entry.component';

describe('EmployeesEntryComponent', () => {
  let component: EmployeesEntryComponent;
  let fixture: ComponentFixture<EmployeesEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
