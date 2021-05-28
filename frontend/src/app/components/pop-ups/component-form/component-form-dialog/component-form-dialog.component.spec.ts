import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormDialogComponent } from './component-form-dialog.component';

describe('ComponentFormDialogComponent', () => {
  let component: ComponentFormDialogComponent;
  let fixture: ComponentFixture<ComponentFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
