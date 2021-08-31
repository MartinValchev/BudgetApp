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

  constructor(private route: ActivatedRoute, private noteService: NotesService) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.note = this.noteService.getNoteById(+this.route.snapshot.params['id'])
    console.log(this.note)
  }

}
