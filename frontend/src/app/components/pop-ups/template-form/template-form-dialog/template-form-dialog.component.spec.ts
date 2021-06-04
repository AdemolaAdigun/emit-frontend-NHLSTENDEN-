import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDialogComponent } from './template-form-dialog.component';

describe('TemplateFormDialogComponent', () => {
  let component: TemplateFormDialogComponent;
  let fixture: ComponentFixture<TemplateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
