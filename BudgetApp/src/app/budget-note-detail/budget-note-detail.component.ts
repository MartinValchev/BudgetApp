import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetNote } from '../model/BudgetNote';
import { NotesService } from '../note.service';

@Component({
  selector: 'app-budget-note-detail',
  templateUrl: './budget-note-detail.component.html',
  styleUrls: ['./budget-note-detail.component.css']
})
export class BudgetNoteDetailComponent implements OnInit {

  note: BudgetNote | undefined;
  noteId = 0;

  constructor(private route: ActivatedRoute, private noteService: NotesService) {

  }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.params['id'];
    this.note = this.noteService.getNoteById(+this.route.snapshot.params['id'])
    console.log(this.note)
  }

  onDeleteNote() {
    this.noteService.noteElements = this.noteService.noteElements.filter(el => el.id = this.noteId);
  }

}
