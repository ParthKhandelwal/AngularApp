import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxDetailsFormComponent } from './create-tax-details-form.component';

describe('CreateTaxDetailsFormComponent', () => {
  let component: CreateTaxDetailsFormComponent;
  let fixture: ComponentFixture<CreateTaxDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaxDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaxDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
