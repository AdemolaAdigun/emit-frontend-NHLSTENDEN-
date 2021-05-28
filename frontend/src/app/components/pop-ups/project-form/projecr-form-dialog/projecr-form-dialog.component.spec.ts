import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecrFormDialogComponent } from './projecr-form-dialog.component';

describe('ProjecrFormDialogComponent', () => {
  let component: ProjecrFormDialogComponent;
  let fixture: ComponentFixture<ProjecrFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecrFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecrFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
