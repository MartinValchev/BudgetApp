import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetNote } from '../model/BudgetNote';
import { NotesService } from '../note.service';

@Component({
  selector: 'app-budget-board',
  templateUrl: './budget-board.component.html',
  styleUrls: ['./budget-board.component.css']
})
export class BudgetBoardComponent implements OnInit {

  notes: Array<BudgetNote> | undefined;

  constructor(private noteService: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.notes = this.noteService.getBudgetNotes();
  }

  handleNoteThumbnailClick(id: number | undefined) {
    this.router.navigate(['note'  , id])

  }

}
