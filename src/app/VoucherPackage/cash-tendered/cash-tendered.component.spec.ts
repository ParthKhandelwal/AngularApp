import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTenderedComponent } from './cash-tendered.component';

describe('CashTenderedComponent', () => {
  let component: CashTenderedComponent;
  let fixture: ComponentFixture<CashTenderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashTenderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashTenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
