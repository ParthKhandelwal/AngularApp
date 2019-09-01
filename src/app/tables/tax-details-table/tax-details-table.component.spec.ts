import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDetailsTableComponent } from './tax-details-table.component';

describe('TaxDetailsTableComponent', () => {
  let component: TaxDetailsTableComponent;
  let fixture: ComponentFixture<TaxDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
