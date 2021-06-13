import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAnswersDialogComponent } from './field-answers-dialog.component';

describe('FieldAnswersDialogComponent', () => {
  let component: FieldAnswersDialogComponent;
  let fixture: ComponentFixture<FieldAnswersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldAnswersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAnswersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
