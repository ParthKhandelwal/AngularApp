import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemTableComponent } from './stock-item-table.component';

describe('StockItemTableComponent', () => {
  let component: StockItemTableComponent;
  let fixture: ComponentFixture<StockItemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
