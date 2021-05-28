import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsFormComponent } from './attachments-form.component';

describe('AttachmentsFormComponent', () => {
  let component: AttachmentsFormComponent;
  let fixture: ComponentFixture<AttachmentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
