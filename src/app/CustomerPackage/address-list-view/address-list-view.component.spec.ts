import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListViewComponent } from './address-list-view.component';

describe('AddressListViewComponent', () => {
  let component: AddressListViewComponent;
  let fixture: ComponentFixture<AddressListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
