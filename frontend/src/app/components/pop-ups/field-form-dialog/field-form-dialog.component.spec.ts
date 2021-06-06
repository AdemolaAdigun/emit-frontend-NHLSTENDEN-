import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFormDialogComponent } from './field-form-dialog.component';

describe('FieldFormDialogComponent', () => {
  let component: FieldFormDialogComponent;
  let fixture: ComponentFixture<FieldFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
