import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetNote } from 'src/app/model/BudgetNote';
import { NotesService } from 'src/app/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  noteForm !: FormGroup;

  constructor(private notesService: NotesService, private router: Router) {
   }

  ngOnInit(): void {
    let noteName = new FormControl();
    let noteType = new FormControl();
    let noteAmount = new FormControl();
    let noteDate = new FormControl();
    let noteDescription = new FormControl();
    this.noteForm = new FormGroup({
      noteName: noteName,
      noteType: noteType,
      noteAmount: noteAmount,
      noteDate: noteDate,
      noteDescription: noteDescription
    });

  }

  onNoteSubmit() {
    let newNote = new BudgetNote();
    newNote.id = this.notesService.getLastNoteIndex() + 1;
    newNote.name = this.noteForm.get('noteName')?.value;
    newNote.type = this.noteForm.get('noteType')?.value;
    newNote.amount = this.noteForm.get('noteAmount')?.value;
    newNote.date = this.noteForm.get('noteDate')?.value;
    newNote.description = this.noteForm.get('noteDescription')?.value
    this.notesService.noteElements.push(newNote);
    this.router.navigate(['notes']);
  }

  onCancelForm() {
    this.router.navigate(['notes'])
  }
}
