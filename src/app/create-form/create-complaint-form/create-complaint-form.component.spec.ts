import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplaintFormComponent } from './create-complaint-form.component';

describe('CreateComplaintFormComponent', () => {
  let component: CreateComplaintFormComponent;
  let fixture: ComponentFixture<CreateComplaintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComplaintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComplaintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
