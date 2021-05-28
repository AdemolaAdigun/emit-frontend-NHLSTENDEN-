import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFormDialogComponent } from './orders-form-dialog.component';

describe('OrdersFormDialogComponent', () => {
  let component: OrdersFormDialogComponent;
  let fixture: ComponentFixture<OrdersFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
