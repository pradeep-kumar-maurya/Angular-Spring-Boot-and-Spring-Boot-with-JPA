import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllEmployeeComponent } from './fetch-all-employee.component';

describe('FetchAllEmployeeComponent', () => {
  let component: FetchAllEmployeeComponent;
  let fixture: ComponentFixture<FetchAllEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchAllEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchAllEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
