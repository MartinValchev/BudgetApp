import { Component, Input, OnInit } from '@angular/core';
import { BudgetNote, BudgetNoteType } from '../model/BudgetNote';
import { NotesService } from '../note.service';

@Component({
  selector: 'note-thumbnail',
  templateUrl: './note-thumbnail.component.html',
  styleUrls: ['./note-thumbnail.component.css']
})
export class NoteThumbnailComponent implements OnInit {

  @Input() note: BudgetNote | undefined
  id: number | undefined;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  handleDeleteNote() {
    this.notesService.noteElements = this.notesService.getBudgetNotes().filter(note => this.note?.id === this.id)
  }

}
