import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserFormComponent } from './dialog-user-form.component';

describe('DialogUserFormComponent', () => {
  let component: DialogUserFormComponent;
  let fixture: ComponentFixture<DialogUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
