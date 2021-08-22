import { Component, OnInit } from '@angular/core';
import { BudgetNote, BudgetNoteType } from '../model/BudgetNote';

@Component({
  selector: 'app-budget-note',
  templateUrl: './budget-note.component.html',
  styleUrls: ['./budget-note.component.css']
})
export class BudgetNoteComponent implements OnInit {

  note: BudgetNote | undefined;

  constructor() { }

  ngOnInit(): void {
    this.note = new BudgetNote();
    this.note.name = 'Remont Boiler';
    this.note.type = BudgetNoteType.Expence;
    this.note.amount = 150;
    this.note.notes = 'ddssddfsds';
  }

}
