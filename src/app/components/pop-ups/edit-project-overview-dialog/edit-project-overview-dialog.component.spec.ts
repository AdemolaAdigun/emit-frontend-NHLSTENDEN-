import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectOverviewDialogComponent } from './edit-project-overview-dialog.component';

describe('EditProjectOverviewDialogComponent', () => {
  let component: EditProjectOverviewDialogComponent;
  let fixture: ComponentFixture<EditProjectOverviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectOverviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
