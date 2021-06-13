import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDialogComponent } from './field-dialog.component';

describe('FieldDialogComponent', () => {
  let component: FieldDialogComponent;
  let fixture: ComponentFixture<FieldDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
