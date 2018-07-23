import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePreviewListComponent } from './employee-preview-list.component';

describe('EmployeePreviewListComponent', () => {
  let component: EmployeePreviewListComponent;
  let fixture: ComponentFixture<EmployeePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
