import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpsComponent } from './pop-ups.component';

describe('PopUpsComponent', () => {
  let component: PopUpsComponent;
  let fixture: ComponentFixture<PopUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
