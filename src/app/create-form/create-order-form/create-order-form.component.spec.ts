import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderFormComponent } from './create-order-form.component';

describe('CreateOrderFormComponent', () => {
  let component: CreateOrderFormComponent;
  let fixture: ComponentFixture<CreateOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
