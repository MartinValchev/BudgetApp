import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  noteForm !: FormGroup;

  constructor() { }

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

  //    this.note3.name = 'Avans zaplata';
  // this.note3.type = BudgetNoteType.Income;
  // this.note3.amount = 550;
  // this.note3.date = new Date();
  // this.note3.description = 'avans do zaplat';
}
