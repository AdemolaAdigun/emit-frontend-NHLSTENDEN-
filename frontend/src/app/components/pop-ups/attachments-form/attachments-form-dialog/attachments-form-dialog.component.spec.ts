import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsFormDialogComponent } from './attachments-form-dialog.component';

describe('AttachmentsFormDialogComponent', () => {
  let component: AttachmentsFormDialogComponent;
  let fixture: ComponentFixture<AttachmentsFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentsFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
