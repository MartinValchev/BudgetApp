import { Component, OnInit } from '@angular/core';
import { BudgetNoteType } from '../model/BudgetNote';
import { NotesService } from '../note.service';

@Component({
  selector: 'app-budget-balance',
  templateUrl: './budget-balance.component.html',
  styleUrls: ['./budget-balance.component.css']
})
export class BudgetBalanceComponent implements OnInit {

  budgetBalance = 0;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getBudgetNotes().forEach(n => {
      if (n.type == BudgetNoteType.Income) {
        this.budgetBalance += n.amount
      } else {
        this.budgetBalance -= n.amount
      }
      });
  }

}
