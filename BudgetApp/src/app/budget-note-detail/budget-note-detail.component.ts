import { Component, OnInit } from '@angular/core';
import { BudgetNote } from '../model/BudgetNote';

@Component({
  selector: 'app-budget-note-detail',
  templateUrl: './budget-note-detail.component.html',
  styleUrls: ['./budget-note-detail.component.css']
})
export class BudgetNoteDetailComponent implements OnInit {

  note: BudgetNote | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
