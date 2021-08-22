import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetNoteComponent } from './budget-note.component';

describe('BudgetNoteComponent', () => {
  let component: BudgetNoteComponent;
  let fixture: ComponentFixture<BudgetNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
