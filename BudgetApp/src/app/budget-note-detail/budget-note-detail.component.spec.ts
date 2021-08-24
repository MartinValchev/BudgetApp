import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetNoteDetailComponent } from './budget-note-detail.component';

describe('BudgetNoteDetailComponent', () => {
  let component: BudgetNoteDetailComponent;
  let fixture: ComponentFixture<BudgetNoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetNoteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
